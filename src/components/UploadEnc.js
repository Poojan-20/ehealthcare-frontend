import React, { useState } from 'react';
import { Button, Input, Row, Col, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { storage, db } from '../firebase.mjs';
import { AES } from 'crypto-js';

const UploadEnc = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [encryptionKey, setEncryptionKey] = useState('');

  const handleFileUpload = e => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const handleUpload = () => {
    if (!file) {
      message.error('Please select a file to upload!');
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const encrypted = AES.encrypt(reader.result, encryptionKey).toString();

      const uploadTask = storage.ref(`files/${file.name}`).putString(encrypted, 'data_url');
      uploadTask.on(
        'state_changed',
        snapshot => {
          // Progress update
        },
        error => {
          message.error(error.message);
        },
        () => {
          // Upload completed
          storage
            .ref('files')
            .child(file.name)
            .getDownloadURL()
            .then(url => {
              db.collection('files')
                .add({
                  fileName,
                  fileUrl: url,
                })
                .then(() => {
                  message.success(`File "${fileName}" uploaded successfully!`);
                  setFile(null);
                  setFileName('');
                  setEncryptionKey('');
                })
                .catch(error => {
                  message.error(error.message);
                });
            });
        },
      );
    };
  };

  return (
    <Row>
      <Col span={12} offset={6} style={{ textAlign: 'center' }}>
        <Input
          type="file"
          onChange={handleFileUpload}
          style={{ marginTop: '20px' }}
        />
        <Input
          type="password"
          placeholder="Enter encryption key"
          value={encryptionKey}
          onChange={e => setEncryptionKey(e.target.value)}
          style={{ marginTop: '20px' }}
        />
        <Button
          type="primary"
          icon={<UploadOutlined />}
          style={{ marginTop: '20px' }}
          onClick={handleUpload}
        >
          Upload
        </Button>
        <p style={{ marginTop: '20px' }}>{fileName}</p>
      </Col>
    </Row>
  );
};

export default UploadEnc;
