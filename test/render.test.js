import { render } from "@testing-library/svelte";
import { expect, test } from 'vitest'
import midnote from '../src/components/midnote.svelte'

test('should render', () => {
    const results = render(midnote, { props: {} })

    expect(results);
})