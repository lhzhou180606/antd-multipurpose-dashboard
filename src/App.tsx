import {RouterProvider} from 'react-router-dom'
import routes from "./routes/routes.tsx";
import {ConfigProvider} from "antd";

// color palettes: triadic #A1A7CB, #CBA1A7, #A7CBA1

function App() {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#925368',
                    borderRadius: 6,
                }
            }}
        >
            <RouterProvider router={routes}/>
        </ConfigProvider>
    )
}

export default App
