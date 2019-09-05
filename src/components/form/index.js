import React from 'react';
import { Form, Icon,  Input, Button, Checkbox , Select ,Row , Col } from 'antd';
import { profession } from '../../data/profession';
import './form.scss'

const Option = Select.Option;
const Formulaire = ({handleReceiveSubmit,form,handleSubmit}) =>{

  const { getFieldDecorator, setFieldsValue, validateFields } = form;

  const childrenProfession = [];


  handleSubmit = e => {
    e.preventDefault();
     console.log(e)
     
     validateFields((err, values) => {

      if (!err) {
         handleReceiveSubmit(values)
      }
    });
  };




  Object.values(profession).map((value,key)=>{
    childrenProfession.push(<Option key={key} value={value}>{value}</Option>);
})




return (
    <Form onSubmit={handleSubmit} className="login-form">
        <div className="content-form">
          <div className="content_form_left">
            <Form.Item label="Nom">
            {getFieldDecorator('name', {
                rules: [
              
                  {
                    required: true,
                    message: 'Please , veuillez entrer un nom !',
                    whitespace: true 
                  },
                ],
              })(<Input />)}
                
            </Form.Item>
           
            <Form.Item label="Adresse">
            {getFieldDecorator('adress', {
                rules: [
              
                  {
                    required: true,
                    message: 'Please , veuillez entrer un adresse !',
                    whitespace: true 
                  },
                ],
              })(<Input />)}
              
        
            </Form.Item>
            <Form.Item label="Profession">
            <Select
                        
                        allowClear={true}
                        mode="multiple"
                        style={{ width: '100%' }}
                        placeholder="selectionner une profession"
                        validateStatus="error"
                        onChange={()=>{}} 
                      
                    >
                      { childrenProfession  }
              </Select>
              </Form.Item>
              <Form.Item label="E-mail">
                {getFieldDecorator('email', {
                  rules: [
                    {
                      type: 'email',
                      message: 'The input is not valid E-mail!',
                    },
                    {
                      required: true,
                      message: 'Please input your E-mail!',
                    },
                  ],
                })(<Input />)}
              </Form.Item>
              </div>
            
            <div className ="content_form_right">

            <Form.Item label="Prenom">
            {getFieldDecorator('prenom', {
                rules: [
              
                  {
                    required: true,
                    message: 'Please , veuillez entrer un prénom !',
                    whitespace: true 
                  },
                ],
              })(<Input />)}
              
        
            </Form.Item>

              <Form.Item label="Langages">
                {getFieldDecorator('checkbox-group', {
                  initialValue: '',
                })(
                  <Checkbox.Group style={{ width: '100%' }}>
                    <Row>
                      <Col span={8}>
                        <Checkbox value="front">Front</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox  value="back">
                          Back
                        </Checkbox>
                      </Col>
        
                    </Row>
                  </Checkbox.Group>,
                )}
              </Form.Item>
                <div className='content_form_adresseCp'>
                  <Form.Item label="Code Postal">
                {getFieldDecorator('Cp', {
                    rules: [
                  
                      {
                        required: true,
                        whitespace: true 
                      },
                    ],
                  })(<Input />)}
                  
            
                </Form.Item>

                <Form.Item label="Ville">
                {getFieldDecorator('town', {
                    rules: [
                  
                      {
                        required: true,
                        whitespace: true 
                      },
                    ],
                  })(<Input />)}
                  
                </Form.Item>
                </div>
                <Form.Item label="Telephone">
                {getFieldDecorator('number', {
                    rules: [
                  
                      {
                        required: true,
                        message: 'Please , veuillez entrer un numero de telphone !',
                        whitespace: true 
                      },
                    ],
                  })(<Input />)}
                  
                </Form.Item>    
          </div>
        </div>
        <div  className='footer-form'>



        <Form.Item>
      


        <Button type="primary" htmlType="submit" className="login-form-button">
            valider
        </Button>
        
        </Form.Item>
        </div>
  </Form>
);

}
const WrappedFormulaireForm = Form.create({ name: 'register' })(Formulaire);

export default WrappedFormulaireForm 
