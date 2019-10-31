import React, { useState } from 'react';
import { MdClear, MdDelete } from "react-icons/md";
import CsvDownloader from 'react-csv-downloader';
import { toast } from 'react-toastify';
import { Form, Table, DownloadButton } from './styles';
import { useFormik } from 'formik';

import PageHeader from '../../components/PageHeader';

import PageContainer from '../../components/PageContainer';
import Container from '../../components/Container';
import 'react-toastify/dist/ReactToastify.css';

import logo from '../../assets/images/logo.png';

import list from '../../tmp/list';

function GDB() {
  const [data, setData] = useState([]);
  
  const handleDelete = (index) => {
    const newDt = data.filter((_, idx) => idx !== index)
    setData(newDt)
  }

  const formik = useFormik({
    initialValues: {
      userId:'',
      perfilOne: '',
      perfilTwo:'',
      perfilThree: ''
    },
    
    onSubmit: values => {
      
      if(data.length >= 15) {
        toast.error('Só é possível adicionar 15 acessos por planilha');
        return
      }

      let nId = '', nperfilOne = '', nperfilTwo = '', nperfilThree ='';
    
      if(!formik.values.userId){
        nId =  <p>• ID do usuário</p>;
      };
      if(!formik.values.perfilOne){
        nperfilOne = <p>• Perfil 1</p>;
      };
      if(!formik.values.perfilTwo){
        nperfilTwo = <p>• Perfil 2</p>;
      };
      if(!formik.values.perfilThree){
        nperfilThree = <p>• Perfil 3</p>;
      };
      if (!formik.values.userId || !formik.values.perfilOne || !formik.values.perfilTwo || !formik.values.perfilThree) { 
        toast.error(<div>Preencha: {nId}{nperfilOne}{nperfilTwo}{nperfilThree}</div>);
        return
      };
      
      setData([values,...data]);
      console.log(data)
    }
  })

  return (
    <>
      <PageHeader title={"GDB Tool Services"} />
      <PageContainer>
        <Container>
          <img src={logo} alt="logo-vale" ></img>
          <Form onSubmit={formik.handleSubmit}>
            <label htmlFor='userId'>User ID</label>
            <input
              id="userId"
              name="userId"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.userId}
            />

            <label htmlFor='perfilOne'>Perfil 1</label>
            <select 
              id="perfilOne"
              name='perfilOne'
              type="text"
              onChange={formik.handleChange}
              value={formik.values.perfilOne}
              >
                {list.map(item => (
                  <option key={item}>{item}</option>
                ))}
              </select>

            <label htmlFor='perfilTwo'>Perfil 2</label>
            <select 
            id='perfilTwo'
            name='perfilTwo'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.perfilTwo}
            >
              {list.map(item => (
                  <option key={item}>{item}</option>
                ))}
            </select>

            <label htmlFor='perfilThree'>Perfil 3</label>
            <select 
              id='perfilThree'
              name='perfilThree'
              type='text'
              onChange={formik.handleChange}
              value={formik.values.perfilThree}
            >
              {list.map(item => (
                  <option key={item}>{item}</option>
                ))}
            </select>

            <button type="submit">Add</button>
            <DownloadButton>
              <CsvDownloader filename="multiple_requests" separator=";" noHeader={true} datas={data}>
                Download CSV
              </CsvDownloader>
            </DownloadButton>
          </Form>
        </Container>
        <Container>
          <Table>
            <tbody>
              <tr>
                <th>ID</th>
                <th>Perfil 1</th>
                <th>Perfil 2</th>
                <th>Perfil 3</th>
                <th><MdDelete size={20}/></th>
              </tr>
              {data.map((d, idx) => (
                <tr key={idx}>
                  <td>{d.userId}</td>
                  <td>{d.perfilOne}</td>
                  <td>{d.perfilTwo}</td>
                  <td>{d.perfilThree}</td>
                  <td>
                    <button onClick={() => handleDelete(idx)}>
                      <MdClear size={20} color='red'/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </PageContainer>
    </>
  );
}

export default GDB;