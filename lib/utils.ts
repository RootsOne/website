import { ref } from 'vue'
import { UrlParams, UseIntersectionObserverOptions, useIntersectionObserver } from '@vueuse/core'
import { stagger, timeline } from "motion";
import { watchTriggerable } from '@vueuse/core';
import { useUrlSearchParams } from '@vueuse/core'
import { Mutex } from './mutex';

/* Declare element refs */
const bg = ref(null);
const home = ref(null);
const why = ref(null);
const services = ref(null);
const portfolio = ref(null);
const us = ref(null);

const activeSection = ref('home');
const activeTarget = ref('');
const params = useUrlSearchParams('hash-params')
const { trigger, ignoreUpdates } = watchTriggerable(
    params,
    onHashChange,
);

export const scrollLock = new Mutex();
export const navigationLock = new Mutex();

export const Navigation = {
    indexes: ['home', 'why', 'services', 'portfolio', 'us'],
    next() {
        const nextIndex = this.indexes.indexOf(activeSection.value) + 1;
        if (nextIndex > 0 && nextIndex < this.indexes.length) {
            params.section = this.indexes[nextIndex];
        }
    },
    prev() {
        const prevIndex = this.indexes.indexOf(activeSection.value) - 1;
        if (prevIndex >= 0) {
            params.section = this.indexes[prevIndex];
        }
    }
};

async function onHashChange(params: UrlParams) {
    if (navigationLock.syncAcquire()) {
        requestAnimationFrame(() => {
            if (activeSection.value !== params.section) {
                activeSection.value = params.section?.toString() || 'home';
            }
            if (params.target) {
                activeTarget.value = params.target?.toString();
                const target = document.getElementById(params.target?.toString());
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
            setTimeout(() => {
                navigationLock.release();
            }, 1200);
        })
    }
}

export const handleScroll = async (
    event: Event,
    options?: {
        prev?: ((event: Event) => Promise<void>) | null | undefined,
        next?: ((event: Event) => Promise<void>) | null | undefined,
        axis?: string[],
        timeout?: number | null
        minDelta?: number | null
    }
) => {
    const timeout = options?.timeout ?? 1200;
    if ((timeout == 0 || scrollLock.syncAcquire()) && navigationLock.syncAcquire()) {
        navigationLock.release();
        const next = (event: Event) => options?.next ? options.next(event) : Navigation.next()
        const prev = (event: Event) => options?.prev ? options.prev(event) : Navigation.prev()
        const axis = options?.axis ?? ['x', 'y'];
        const minDelta = options?.minDelta ?? 0;
        if (event instanceof WheelEvent && event.deltaY > 0 && axis.includes('y')) {
            await next(event);
        }
        else if (event instanceof WheelEvent && event.deltaY < 0 && axis.includes('y')) {
            await prev(event);
        }
        else if (event instanceof WheelEvent && event.deltaX > 0 && axis.includes('x')) {
            await next(event);
        }
        else if (event instanceof WheelEvent && event.deltaX < 0 && axis.includes('x')) {
            await prev(event);
        } else {
            scrollLock.release();
            return;
        }
        setTimeout(() => {
            scrollLock.release();
        }, timeout + 1);
    }
};

export { trigger, bg, home, why, services, portfolio, us, activeSection, activeTarget };

export function inView(target: any, callback: (entry: IntersectionObserverEntry) => void, options: UseIntersectionObserverOptions = {}) {
    const { stop } = useIntersectionObserver(
        target,
        (entries, observerElement) => {
            entries.forEach((entry) => {
                console.log(entry, observerElement);
                if (entry.isIntersecting) {
                    callback(entry);
                    observerElement.unobserve(entry.target);
                }
            })
        },
        options
    )
    stop;
}


export function heroInView(hero: Ref<HTMLElement | null>) {
    inView(hero, ({ target }) => {
        console.log('heroInView');
        timeline(
            [
                [
                    target.querySelectorAll('.staggered'),
                    { opacity: [0, 1], transform: ['translateY(100px)', 'none'] },
                    { delay: stagger(0.2, { start: 0 }), duration: 1, easing: [0.17, 0.55, 0.55, 1] }
                ],
                [
                    target.querySelectorAll('.img'),
                    { opacity: [0, 1], transform: ['translateX(100px)', 'none'] },
                    { at: 0.3, duration: 1, easing: [0.17, 0.55, 0.55, 1] }
                ]
            ],
            { delay: 0, duration: 1.2, defaultOptions: { easing: [0.17, 0.55, 0.55, 1] } }
        );
    }, {
    });
}
