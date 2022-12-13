import "./styles.css";
import { Button, DatePicker, Space, version } from "antd";
import "antd/dist/reset.css";

export default function App() {
  return (
    <div className="App">
      <h1>antd version: {version}</h1>
      <Space>
        <DatePicker />
        <Button type="primary">Primary Button</Button>
      </Space>
    </div>
  );
}
