import { render } from "@testing-library/svelte";
import { expect, test } from 'vitest'
import midnote from '../src/components/midnote.svelte'
import TestComponent from './lib/testComponent.svelte'

const slotsTests = () => {
    test('should render passed slot components', () => {
        const results = render(TestComponent, {
            props: {
                slots: [midnote]
            }
        })

        expect(results).is;
    })
}

export {
    slotsTests
}