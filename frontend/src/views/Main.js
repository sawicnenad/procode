import React from 'react';
import { Layout, Icon } from 'antd';
import MySider from '../components/MySider';
import MyHeader from '../components/MyHeader';
import { Switch, Route } from 'react-router-dom';
import Coding from '../components/Coding';
import Files from '../components/Files';
import Transcoding from '../components/Transcoding';
import CodingResults from '../components/files/CodingResults';
import History from '../components/History';
import TranscodingResults from '../components/files/TranscodingResults';
import FileDataView from '../components/files/FileDataView';
import withAuth from '../hoc/withAuth';

// Main view for all components for end-user
// layout with header and sider
function Main() {

    const styling = {
        header: {
            padding: "5px 25px",
            height: 75,
            background: "white"
        },
        layoutContent: {
            padding: "25px 25px 25px"
        },
        content: {
            background: "white",
            minHeight: 500,
            height: "85vh",
            overflow: "auto",
            padding: 24
        },
        footer: {
            textAlign: "center"
        }
    }
    return(
        <Layout>
            
            {/* Sider defined in my sider */}
            <MySider />

            <Layout>
                {/* header */}
                <Layout.Header style={styling.header}>
                    <MyHeader />
                </Layout.Header>


                <Layout
                    style={styling.layoutContent}
                >
                    <Layout.Content
                        style={styling.content}
                    >   
                        {/* routes */}
                        <Switch>
                            <Route path="/" exact component={ Coding } />
                            <Route path="/my-files" exact component={ Files } />
                            <Route path="/transcoding" exact component={ Transcoding } />
                            <Route path="/coding-results/file=:id" component={ CodingResults } />
                            <Route path="/transcoding-results/file=:id" component={ TranscodingResults } />
                            <Route path="/my-files/file=:id" component={ FileDataView } />
                            <Route path="/history" component={ History } />
                        </Switch>
                    </Layout.Content>
                </Layout>

                <Layout.Footer style={styling.footer}>
                    <div>
                        Developed and maintained by: <br/>
                        <strong>Nenad Savic</strong>
                    </div>
                    <div><br/>
                        <Icon type="mail" /> <a href="mailto: nenad@nedisa.com">nenad@nedisa.com</a>
                    </div>
                    <div>
                        <Icon type="phone" /> +41 78 860 57 80
                    </div>
                </Layout.Footer>
            </Layout>
        </Layout>
    )
}
export default withAuth( Main );