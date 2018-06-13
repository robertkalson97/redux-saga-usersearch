import React,{Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form,Button,Row,Col } from 'reactstrap';
import renderField from './renderField';
//import renderSelectField from './renderSelectField';

const validate = (values) => {
  const errors = {};
  if (!values.keyword) {
    errors.keyword = 'Required';
  }
  return errors;
};
class SearchForm extends Component {
  handleInitialize () {
    // TODO: Manage properly user not available case (redux form reason ?)
    //if (this.props.user.firstname === undefined) return;
    const {initValues} = this.props;
    const initData = {
      //'telephone': this.props.user.telephone === undefined ? '' : this.props.user.telephone.toString()
      ...initValues
    };
    this.props.initialize(initData);
  }
  componentDidMount () {
    this.handleInitialize();
  }
  render () {
    const { handleSubmit, submitting } = this.props;
    return (
      <Form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}>
      <Row>  
        <Col md={'3'}>
          <Field
            name="keyword"
            component={renderField}
            type="text"
            label="Keyword"
            placeholder="Enter a keyword"
            //{...keyword}
          />
        </Col>
        {/* <Col md={'3'}> 
          <Field
            name="searchtype"
            component={renderSelectField}
            type="text"
            label="Type"
            //placeholder="Enter a keyword"
            //{...keyword}
          />
        </Col> */}
        <Col md={'3'}>   
          <Button  color = "primary" type="submit" disabled={submitting}>
            Submit
          </Button>
        </Col>
      </Row>  
      </Form>
    );
  }
}

export default reduxForm({
  form: 'searchForm',
  validate,
  //fields: ['keyword']
})(SearchForm);
