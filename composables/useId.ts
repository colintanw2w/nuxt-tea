
let id = 0;

export default function useId (prefix = 'generated-id-') {
    const nextId = () => prefix + id++;
    return { nextId };
}
