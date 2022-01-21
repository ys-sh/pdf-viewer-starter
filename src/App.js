import * as React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import jp_JP from '@react-pdf-viewer/locales/lib/jp_JP.json';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const App = () => {

    // eslint-disable-next-line no-unused-vars
    const [url, setUrl] =  React.useState("https://ys-sh.github.io/pdf-viewer-starter/test.pdf");
    
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const cMap = { url: "https://ys-sh.github.io/cmaps/", isCompressed: true }
    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.js">
            <div
                style={{
                    height: '750px',
                    width: '900px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            >
                <Viewer
                    fileUrl={url}
                    plugins={[defaultLayoutPluginInstance]}
                    localization={jp_JP}
                    characterMap={cMap}

                />
            </div>
        </Worker>
    );
};

export default App;
