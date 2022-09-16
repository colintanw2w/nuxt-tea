import { setActivePinia, createPinia } from 'pinia';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { useSidebar } from './sidebar';

beforeAll(() => {
    setActivePinia(createPinia());
});

afterAll(() => {
    setActivePinia(null);
});

describe('sidebar store', () => {
    it('should be defined', () => {
        expect(useSidebar).toBeDefined();
    });

    it('should be open by default', () => {
        const sidebar = useSidebar();
        expect(sidebar.isOpen).toBe(true);

        sidebar.toggle();
        expect(sidebar.isOpen).toBe(false);
    });
});
