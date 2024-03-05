import { render } from "@testing-library/svelte";
import { expect, test } from 'vitest'
import midnote from '../src/components/midnote.svelte'

const renderTest = () => {
    test('should render', () => {
        const results = render(midnote, { props: {} })

        expect(results).is;
    })
}

export {
    renderTest
}