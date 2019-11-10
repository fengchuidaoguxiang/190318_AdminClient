import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Form,
    Input
} from 'antd';

const Item = Form.Item;

/**
 * 添加分类/修改分类的Form组件
 *    Form组件：包含Form标签的组件，叫作Form组件
 */
class AddUpdateForm extends Component {

    static propTypes = {
        setForm: PropTypes.func.isRequired
    }

    componentWillMount(){
        this.props.setForm(this.props.form);
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form>
                <Item>
                    {
                        getFieldDecorator('categoryName',{
                            initialValue: '',
                            rules: [
                                {required: true, message: '分类名称必须输入'}
                            ]
                        })(
                            <Input type="text" placeholder="请输入分类名称"></Input>
                        )
                    }     
                </Item>
            </Form>
        )
    }
}

export default Form.create()(AddUpdateForm);
