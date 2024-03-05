import { SvelteComponent } from 'svelte'
import midnote from '../src/components/midnote.svelte'

type MidnoteLibraryComponent = {
    props: {
        slots: [
            {
                slotName: string,
                slotContent: SvelteComponent | string
            }
        ]
    }
}

export {
    MidnoteLibraryComponent
}