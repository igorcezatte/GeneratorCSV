import React, { useState } from 'react';
import { MdClear, MdDelete } from "react-icons/md";
import CsvDownloader from 'react-csv-downloader';
import { toast } from 'react-toastify';
import { Form, Table, DownloadButton } from './styles';
import { useFormik } from 'formik';
import perfil1 from '../../tmp/lista';

import PageHeader from '../../components/PageHeader';

import PageContainer from '../../components/PageContainer';
import Container from '../../components/Container';
import 'react-toastify/dist/ReactToastify.css';

import logo from '../../assets/images/logo.png';

import list from '../../tmp/list';

function VSC() {
  const [data, setData] = useState([]);
  
  const handleDelete = (index) => {
    const newDt = data.filter((_, idx) => idx !== index)
    setData(newDt)
  }

  const formik = useFormik({
    initialValues: {
      userId:'',
      company: '',
      supOrg:'',
      supGroup: ''
    },
    
    onSubmit: values => {
      
      if(data.length >= 15) {
        toast.error('Só é possível adicionar 15 acessos por planilha');
        return
      }

      let nId = '', nCompany = '', nSupOrg = '', nSupGroup ='';
    
      if(!formik.values.userId){
        nId =  <p>• ID do usuário</p>;
      };
      if(!formik.values.company){
        nCompany = <p>• Company</p>;
      };
      if(!formik.values.supOrg){
        nSupOrg = <p>• Support Organization</p>;
      };
      if(!formik.values.supGroup){
        nSupGroup = <p>• Support Group</p>;
      };
      if (!formik.values.userId || !formik.values.company || !formik.values.supOrg || !formik.values.supGroup) { 
        toast.error(<div>Preencha: {nId}{nCompany}{nSupOrg}{nSupGroup}</div>);
        return
      };
      
      setData([values,...data]);
      console.log(formik)
    }
  })

  return (
    <>
      <PageHeader title={"VSC Tool Services"} />
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

            <label htmlFor='company'>Company</label>
            <select 
              id="company"
              name='company'
              type="text"
              onChange={formik.handleChange}
              value={formik.values.company}
              >
                {perfil1.map(item => (
                  <option key={item}>{item}</option>
                ))}
              </select>

            <label htmlFor='supOrg'>Support Organization</label>
            <select 
            id='supOrg'
            name='supOrg'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.supOrg}
            >
              {list.map(item => (
                  <option key={item}>{item}</option>
                ))}
            </select>

            <label htmlFor='supGroup'>Support Group</label>
            <select 
              id='supGroup'
              name='supGroup'
              type='text'
              onChange={formik.handleChange}
              value={formik.values.supGroup}
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
                <th>Company</th>
                <th>Sup Org.</th>
                <th>Sup Group</th>
                <th><MdDelete size={20}/></th>
              </tr>
              {data.map((d, idx) => (
                <tr key={idx}>
                  <td>{d.userId}</td>
                  <td>{d.company}</td>
                  <td>{d.supOrg}</td>
                  <td>{d.supGroup}</td>
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

export default VSC;