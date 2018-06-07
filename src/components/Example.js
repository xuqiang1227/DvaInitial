import React, {PureComponent} from 'react';
import {FormattedMessage} from 'react-intl';

class Select extends PureComponent {
  constructor() {
    super(...arguments);
    this.myFunction = this.myFunction.bind(this);
  }

  myFunction(e) {
    console.log(e);
  }

  render() {
    const {options = [], onChange} = this.props;
    return <select onChange={e => {
      onChange && onChange(e);
      this.myFunction(e.target.value);
    }} ref={r => this.select = r}>
      {options.map(option => {
        return <option key={option.id} value={option.value}>{option.label}</option>
      })}
    </select>
  }
}

const mySelect = () => {
  return Com => {
    return class extends React.Component {

      constructor() {
        super(...arguments);
        this.myFunction = this.myFunction.bind(this);
      }

      componentDidMount() {
        this.s.myFunction = this.myFunction;
      }

      onChange(e) {
        const target = this.props.options.filter(op => String(op.value) === e.target.value)[0] || {};
        this.props.onChange(e, target);
      }

      myFunction(e) {
        console.log('new :' + e);
      }

      render() {
        return <Com {...this.props} onChange={e => this.onChange(e)} ref={r => this.s = r}/>;
      }
    }
  };
};

const MySelect = mySelect()(Select);

const Example = ({dispatch}) => {
  return (
    <div>
      <FormattedMessage id="example.test"/>
      <div>Dva 2.X</div>
      {dispatch && <div><br/>This page can get dispatch...</div>}

      <div>
        <MySelect options={[{id: 1, value: 1, label: 'example'}, {id: 2, value: 3, label: 'test'}]}
                  onChange={(e, v) => console.log(e.target.value, v)}/>
      </div>
    </div>
  );
};

Example.propTypes = {};

export default Example;
