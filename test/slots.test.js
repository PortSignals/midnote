import { render } from "@testing-library/svelte";
import { describe, expect, test } from 'vitest'
import Midnote from '../src/components/Midnote.svelte'
import TestComponent from './lib/testComponent.svelte'

describe('component hosting via slots', () => {
    test('test component should render passed slot components', () => {
        const results = render(TestComponent, {
            props: {
                slots: [Midnote]
            }
        })

        expect(results.getByText('neat! 🔧')).is;
    })

    test('should render passed slot components', () => {
        const results = render(Midnote, {
            props: {
                slots: [
                    {
                        slotName: 'label',
                        slotContent: TestComponent
                    },
                    {
                        slotName: 'content',
                        slotContent: TestComponent
                    }
                ]
            }
        })

        expect(results).is;
        expect(results.container.classList.contains('expandable'));
    })
})
