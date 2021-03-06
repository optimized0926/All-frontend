import styled from 'styled-components'

const FormSwitch = styled.div`
  display: flex;
  flex-direction: column;
  .switch {
    display: flex;
    position: relative;
    &__cont {
      padding: 3px;
      border: 2px solid ${(props) => props.theme.vars.colors.light};
      color: ${(props) => props.theme.vars.colors.secondary};
      border-radius: ${(p) => p.theme.vars.sizes.borderRadius};
    }
    &__activon {
      background-color: ${(props) => props.theme.vars.colors.primary};
      position: absolute;
      border-radius: ${(p) => p.theme.vars.sizes.borderRadius};
      top: 0;
      height: 100%;
      transition: ${(p) => p.theme.vars.defaults.transition};
    }
    &__item {
      transition: ${(p) => p.theme.vars.defaults.transition};
      ${(p) => p.theme.extend.flexCenter}
      cursor: pointer;
      position: relative;
      z-index: 1;
      font-family: ${(p) => p.theme.vars.defaults.font};
      letter-spacing: 0.8px;
      font-weight: 600;
      font-size: 14px;
      width: 100%;
      padding: 11px;
      border: gray;
      margin: 3px;
      background-color: transparent;
      border-radius: ${(p) => p.theme.vars.sizes.borderRadius};
      &__active {
        color: white;
      }
    }
  }
`

export const FormSwitchNoBorder = styled(FormSwitch)`
  .switch {
    &__cont {
      border: 0px;
    }
    &__item {
      &:nth-child(2) {
        margin-right: 10px;
      }
      &:last-child {
        margin-left: 10px;
      }
      font-weight: 400;
      color: ${(p) => p.theme.vars.colors.neutral_50};
      &:not(.switch__item__active) {
        background-color: ${(p) => p.theme.vars.colors.gray_1};
      }
      &__active {
        color: white;
      }
    }
  }
`
export default FormSwitchNoBorder
