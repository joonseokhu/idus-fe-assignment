import React, {
  useState, useEffect, useReducer, useCallback,
} from 'react';
import styled from 'styled-components';

const TextArea = props => {
  const {
    style,
    className,
    placeholder = '내용을 입력하세요.',
    value: defaultValue = '',
    disabled = false,
    readonly = false,
    onSubmit,
    max,
  } = props;

  const [value, setValue] = useState('');
  const [hasChanged, setHasChanged] = useState(false);

  const handleChange = ev => {
    const input = ev.target.value;
    setValue(input);
    setHasChanged(defaultValue !== input);
  };

  const handleSubmit = () => {
    if (!onSubmit) return;
    if (disabled) return;
    if (typeof onSubmit === 'function') return;
    if (value.length > max) return;
    onSubmit(value);
  };

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {

  }, []);

  return (
    <Wrapper>
      <Container
        style={style}
        className={className}
        role="textbox"
        aria-label={placeholder}
      >
        <InputWrap hasButton={hasChanged}>
          <Input
            onChange={handleChange}
            value={value}
            placeholder={placeholder}
            readOnly={readonly}
            disabled={disabled}
          />
          {max && <Length warn={value.length > max}>{`${max - value.length}`}</Length>}
        </InputWrap>
        {hasChanged && <Button type="button" onClick={handleSubmit}>Save</Button>}
      </Container>
    </Wrapper>
  );
};

export default TextArea;

const Wrapper = styled.div`
  margin: 10px;
`;

const Container = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const InputWrap = styled.div`
  position: relative;
  height: 100%;
  width: ${({ hasButton }) => (hasButton ? 'calc(100% - 80px)' : '100%')};
`;

const Input = styled.textarea`
  display: block;
  outline: none;
  resize: none;
  width: 100%;
  height: 100%;
  padding: 4px 8px;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
  border: 1px solid rgb(180, 180, 180);
  color: #000;
  background-color: #fff;
  &:hover, &:focus {
    border: 1px solid rgb(76, 167, 173);
    &[readonly] {
      border: 1px solid rgb(180, 180, 180)
    }
    &[disabled] {
      border: 1px solid rgb(211, 211, 211);
    }
  }
  &[disabled] {
    border: 1px solid rgb(211, 211, 211);
    background-color: rgb(249, 249, 249);
    color: rgb(233, 160, 157);
  }
`;

const Length = styled.div`
  position: absolute;
  bottom: 4px;
  right: 8px;
  font-size: 13px;
  color: ${({ warn }) => (warn ? 'red' : 'rgb(165, 165, 165)')};
`;

const Button = styled.button`
  display: block;
  width: 70px;
  height: 100%;
  padding: 0;
  outline: none;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid rgb(217, 216, 216);
  color: rgb(76, 167, 173);
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
  &:hover, &:focus{
    border: 1px solid rgb(76, 167, 173);
  }
`;
