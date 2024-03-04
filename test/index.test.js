import { render } from "@testing-library/svelte";
import midnote from '../src/components/midnote.svelte'
import { expect, test } from 'vitest'
import TestComponent from './lib/testComponent.svelte'

test('should render', () => {
    const results = render(midnote, { props: {} })

    expect(results).is;
})