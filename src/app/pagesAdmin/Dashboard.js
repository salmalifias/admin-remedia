import React, { Component } from "react";
import { Row, Form } from "react-bootstrap";

export class Dashboard extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Cari Permintaan</h4>
                <Form className="ml-2">
                  <Row>
                    <Form.Group className="form-sort ">
                      <select className="form-control" id="sortby">
                        <option style={{color:"#c3c5cf"}}>Status Permintaan</option>
                        <option style={{color:"#c3c5cf"}}>Permintaan diproses</option>
                        <option style={{color:"#c3c5cf"}}>Permintaan ditolak</option>
                        <option style={{color:"#c3c5cf"}}>Permintaan selesai</option>
                      </select>
                    </Form.Group>
                    <Form.Group className="form-sort">
                      <Form.Control
                        type="text"
                        className="form-control"
                        id="judul"
                        placeholder="Judul Permintaan"
                      />
                    </Form.Group>
                    <Form.Group className="form-sort">
                      <select className="form-control" id="sortby">
                        <option style={{color:"#c3c5cf"}}>Jenis Permintaan</option>
                        <option style={{color:"#c3c5cf"}}>Videografi</option>
                        <option style={{color:"#c3c5cf"}}>Desain</option>
                        <option style={{color:"#c3c5cf"}}>Publikasi</option>
                        <option style={{color:"#c3c5cf"}}>Website</option>
                      </select>
                    </Form.Group>
                    <Form.Group className="form-sort">
                      <select className="form-control" id="sortby">
                        <option style={{color:"#c3c5cf"}}>Semua Bidang</option>
                        <option style={{color:"#c3c5cf"}}>Kemahasiswaan</option>
                        <option style={{color:"#c3c5cf"}}>Kemasyarakatan</option>
                        <option style={{color:"#c3c5cf"}}>Kominfo</option>
                        <option style={{color:"#c3c5cf"}}>DKKP</option>
                        <option style={{color:"#c3c5cf"}}>Sekretariat Umum</option>
                        <option style={{color:"#c3c5cf"}}>Miba</option>
                      </select>
                    </Form.Group>
                    <button
                      type="search"
                      className="btn btn-primary"
                      style={{ height: "36px", width: "100px" }}
                    >
                      Cari
                    </button>
                  </Row>
                </Form>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Status Permintaan</h4>
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Dept/Biro</th>
                        <th>Bidang</th>
                        <th>Judul Permintaan</th>
                        <th>Jenis Permintaan</th>
                        <th>Tanggal Publikasi</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        onClick={() => history.push("/view-permintaan-desain")}
                      >
                        <td>1</td>
                        <td>Lingkungan Hidup</td>
                        <td>Kemasyarakatan</td>
                        <td>Extend Open Recruitment Earth Day</td>
                        <td>Desain</td>
                        <td>27 Agustus 2021</td>
                        <td>
                          <label className="badge badge-danger">Ditolak</label>
                        </td>
                      </tr>
                      <tr
                        onClick={() => history.push("/view-permintaan-video")}
                      >
                        <td>2</td>
                        <td>Lingkungan Hidup</td>
                        <td>Kemasyarakatan</td>
                        <td>Extend Open Recruitment Earth Day</td>
                        <td>Videografi</td>
                        <td>27 Agustus 2021</td>
                        <td>
                          <label className="badge badge-warning">
                            Diterima
                          </label>
                        </td>
                      </tr>
                      <tr onClick={() => history.push("/view-permintaan-web")}>
                        <td>3</td>
                        <td>Lingkungan Hidup</td>
                        <td>Kemasyarakatan</td>
                        <td>Extend Open Recruitment Earth Day</td>
                        <td>Website</td>
                        <td>27 Agustus 2021</td>
                        <td>
                          <label className="badge badge-success">Selesai</label>
                        </td>
                      </tr>
                      <tr
                        onClick={() =>
                          history.push("/view-permintaan-publikasi")
                        }
                      >
                        <td>4</td>
                        <td>Lingkungan Hidup</td>
                        <td>Kemasyarakatan</td>
                        <td>Extend Open Recruitment Earth Day</td>
                        <td>Publikasi</td>
                        <td>27 Agustus 2021</td>
                        <td>
                          <label className="badge badge-success">Selesai</label>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
