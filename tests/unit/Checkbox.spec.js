import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import {
  fake
} from 'sinon'
import Checkbox from '../../src/components/Checkbox.vue'

let wrapper = null
let onClicked = null

describe('Checkbox.vue', () => {
  it('should generate random id if not provide', () => {
    wrapper = shallowMount(Checkbox, {
      propsData: {
        checked: true,
        onClicked: onClicked
      }
    })

    const id = wrapper.vm.computedId
    // If not generate computedId will be some string that is not null/undefined/empty
    expect(id).to.not.equal('undefined')
  })

  it('should use id if provide', async () => {
    wrapper = shallowMount(Checkbox, {
      propsData: {
        checked: true,
        onClicked: onClicked,
        id: '123'
      }
    })

    // ^ Same as above
    const id = wrapper.vm.computedId
    // If not generate computedId will be some string that is not null/undefined/empty
    expect(id).to.equal('123')
  })

  it('should assign computeId to label and input', () => {

  })

  it('should call function onClicked when being change', () => {
    onClicked = fake()
    wrapper = shallowMount(Checkbox, {
      propsData: {
        checked: true,
        onClicked: onClicked,
        id: '123'
      }
    })

    // Simulate change event
    wrapper.find('input').trigger('click')

    // Assert props on Clicked to be called
    expect(onClicked.callCount).to.be.equal(1)
  })

  it('should assign textClass add text props to span', () => {
    wrapper = shallowMount(Checkbox, {
      propsData: {
        checked: true,
        onClicked: onClicked,
        id: 'test',
        textClass: 'test',
        text: 'test'
      }
    })

    const span = wrapper.find('span')
    expect(span.exists()).to.equal(true)
    expect(span.classes(['.bounce__text', 'test']))
    expect(span.text()).to.equal('test')
  })
  
  it('should assign containerClass to innerDiv', () => {
    wrapper = shallowMount(Checkbox, {
      propsData: {
        checked: true,
        onClicked: onClicked,
        id: 'test',
        containerClass: 'test'
      }
    })

    const div = wrapper.find('div')
    expect(div.exists()).to.equal(true)
    expect(div.classes(['.bouncechk', 'test']))
  })

  it('should assign modifierClass to label', () => {
    wrapper = shallowMount(Checkbox, {
      propsData: {
        checked: true,
        onClicked: onClicked,
        id: 'test',
        modifierClass: 'pink'
      }
    })

    const label = wrapper.find('label')
    expect(label.classes(['.bounce__label', 'bounce__label--pink']))
  })

  it('should use blue as default modifier if not provide', () => {
    wrapper = shallowMount(Checkbox, {
      propsData: {
        checked: true,
        onClicked: onClicked,
        id: 'test'
      }
    })

    const label = wrapper.find('label')
    expect(label.classes(['.bounce__label', 'bounce__label--blue']))
  })
})
