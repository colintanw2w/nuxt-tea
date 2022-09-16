import { describe, it, expect } from 'vitest';
import useId from './useId';

describe('composables/useId', () => {
    it('should return a unique id each time', () => {
        const idGenerator = useId();
        const { nextId } = idGenerator;
        const id = nextId();
        const id2 = nextId();
        expect(id).toBe('generated-id-0');
        expect(id2).toBe('generated-id-1');
    });

    it('should use the specified prefix', () => {
        const idGenerator = useId('prefix-');
        const { nextId } = idGenerator;
        const id = nextId();
        const id2 = nextId();
        expect(id).toEqual('prefix-2');
        expect(id2).toEqual('prefix-3');
    });
});
