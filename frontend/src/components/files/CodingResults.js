import React, { useContext } from 'react';
import { UserDataContext } from '../../contexts/UserDataContext';
import { Loading } from '../Loading';
import { Table, Icon } from 'antd';
import { useTranslation } from 'react-i18next';


const styling = {
    action: {
        textAlign: "right"
    },
    downloadBtn: {
        borderRadius: 0
    },
    table: {
        marginTop: 25
    }
}



// shows results of coding of a file
function CodingResults(props) {
    const context = useContext(UserDataContext);
    const { t } = useTranslation();

    if (!context.loaded){
        return(
            <div>
                { Loading }
            </div>
        )
    }

    let fileID = parseInt(props.match.params.id);
    let file = context.files.find(o => o.id === fileID);
    let myCoding = context.myCoding.filter(o => o['my_file'] === fileID)

    // columns for table below
    const columns = [
        {
            title: t('files.results.column-input'),
            dataIndex: 'text',
            key: 'text'
        }, {
            title: t('files.results.column-scheme'),
            dataIndex: 'scheme',
            key: 'scheme'
        }, {
            title: t('files.results.column-code'),
            dataIndex: 'code',
            key: 'code'
        }, {
            title: t('files.results.column-title'),
            dataIndex: 'title',
            key: 'title'
        }
    ]

    // dataSource for table below
    let dataSource = [];
    let labelTitle = file.lng === 'en' ? 'title' : 'title_' + file.lng;

    for (let i in myCoding) {
        let schemeID = myCoding[i].scheme;

        let obj = {
            key: i.toString(),
            text: myCoding[i].text,
            scheme: context.schemes.find(o => o.id === schemeID).name
        }

        let output =  myCoding[i].output;
        let codes = [];
        let titles = [];

        for (let o in output) {
            codes.push(<div key={i.toString()}>{output[o].code}</div>);
            titles.push(<div key={i.toString()}>{output[o][labelTitle]}</div>);
        }

        obj.code = codes;
        obj.title = titles;

        dataSource.push(obj);
    }
    
    // url for download of excel file
    const url = `${process.env.REACT_APP_API_URL}/download-coding/${fileID}/`;
    return(
        <div>
            <h2>
                { t('files.results.page-title') }
            </h2>

            <div style={styling.action}>
                <button
                    className="success-btn"
                    style={styling.downloadBtn}
                    onClick={() => window.open(url)}
                >
                    <Icon type="file-excel"/> {t('general.download')}
                </button>
            </div>

            <Table
                style={styling.table}
                columns={columns}
                dataSource={dataSource}
            />
        </div>
    )
}
export default CodingResults;