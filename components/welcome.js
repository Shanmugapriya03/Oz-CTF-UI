import React from 'react';
import Link from 'react-router-dom';
export default class Welcome extends React.Component{
    componentWillMount() {
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })
    }
    render(){
        return(
                <div>
                    <div className="col-md-offset-3 col-md-6 col-md-offset-3">
                        <div className="col-md-offset-3 col-md-5 col-md-offset-4">
                            <form>
                                <div className="pad_center">
                                    <div className="form-group">
                                        <label htmlFor="ctf_id">OZ_CTF ID</label>
                                        <input type="text" className="form-control" id="ctf_id" data-toggle="tooltip" data-placement="right" title="Enter Ozmenta_ID"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="secret">Secret Code</label>
                                        <input type="password" className="form-control" id="secret" data-toggle="tooltip" data-placement="right" title="Enter secret_code"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        );
    }
}
