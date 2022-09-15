
import { ref } from 'vue';

const id = ref(0);

export default function useId (prefix = 'generated-id-') {
    const nextId = () => prefix + id.value++;
    return { nextId };
}
