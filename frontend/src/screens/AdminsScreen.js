import React, { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { getAdmins } from '../actions/adminActions';

import AdminsTable from '../components/admins/AdminsTable';
import Spinner from '../components/layout/Spinner';

const AdminsScreen = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const { isAuthenticated, isAdmin } = useSelector((state) => state.auth);

  const { adminList, loading } = useSelector((state) => state.admin);

  useEffect(() => {
    if (!isAuthenticated || !isAdmin) {
      history.push('/');
    } else {
      dispatch(getAdmins());
    }
  }, [history, isAdmin, isAuthenticated, dispatch]);

  return (
    <>
      <h3>
        <i className="fa fa-users"></i> Administradores
      </h3>
      <Row className="mt-4">
        <Col md="9">
          {loading ? <Spinner /> : <AdminsTable admins={adminList} />}
        </Col>
        <Col md="3">
          <Link to="/admins/add" className="btn btn-secondary btn-block">
            <i className="fa fa-plus"></i> Agregar administrador
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default AdminsScreen;
