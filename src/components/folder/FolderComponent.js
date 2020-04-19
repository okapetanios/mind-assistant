import React from 'react';
import {connect} from 'react-redux'
import '../../App.css';

const FolderComponent = ({folder}) =>
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
        <div className="card text-white bg-dark mb-3" sytle={"width:18rem;"}>
            <img className="card-img-top"
                 alt="Folder"
                 src="https://lh3.googleusercontent.com/proxy/sI4ikPulkiMpP2-EQ_Q5KGiMa5lBHfDcbvo1KIE_3SGy7PPcGIkA36abvINWjnLiWC0nVMf5OtILylCDDKT2vz6LWGGYIQ9wtiY1LODoWcLzCLMwCIxnk6zKFyVGwD8aMP4zGmxwf3s4veDQNCTrCUzbCIE"
            />
            <div className="card-body">
                <h6 className="card-title">{folder.title}</h6>
            </div>
        </div>
    </div>

export default FolderComponent




// class FolderComponent extends React.Component{
//     state = {
//         folder: {
//             id: 123,
//             title: "Test"
//         }
//     };
//
//     render() {
//         return (
//             <li className="list-group-item">
//                     <span>
//                         <div className="card-body">
//                             <h4 className="card-title">{folder.title}</h4>
//                             <button
//                                 className="btn btn-danger"
//                                 onClick={() => deleteFolder(folder.id)}>
//                                 Delete</button>
//                         </div>
//                     </span>
//             </li>
//         );
//     }
// }
//
// const stateToPropertyMapper = (state) => ({});
// const dispatchToPropertyMapper = (dispatch) => ({});
// export default connect(
//     stateToPropertyMapper,
//     dispatchToPropertyMapper
// )(FolderComponent)


