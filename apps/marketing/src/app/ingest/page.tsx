'use client';

import { useState, useCallback } from 'react';
import { Upload, File, CheckCircle, XCircle, Loader2 } from 'lucide-react';

interface UploadedFile {
  name: string;
  status: 'uploading' | 'success' | 'error';
  message?: string;
}

export default function IngestPage() {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleUpload = async (fileList: FileList) => {
    const newFiles = Array.from(fileList);

    for (const file of newFiles) {
      setFiles(prev => [...prev, { name: file.name, status: 'uploading' }]);

      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('/api/ingest', {
          method: 'POST',
          body: formData,
        });

        const result = await response.json();

        setFiles(prev =>
          prev.map(f =>
            f.name === file.name
              ? { ...f, status: response.ok ? 'success' : 'error', message: result.message }
              : f
          )
        );
      } catch {
        setFiles(prev =>
          prev.map(f =>
            f.name === file.name
              ? { ...f, status: 'error', message: 'Upload failed' }
              : f
          )
        );
      }
    }
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files.length > 0) {
      handleUpload(e.dataTransfer.files);
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="mx-auto max-w-2xl px-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white">Asset Ingestion</h1>
          <p className="mt-2 text-gray-400">
            Upload files for consideration (zip, images, PDFs, etc.)
          </p>
        </div>

        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`mt-8 rounded-xl border-2 border-dashed p-12 text-center transition-colors ${
            isDragging
              ? 'border-primary-500 bg-primary-500/10'
              : 'border-gray-700 hover:border-gray-600'
          }`}
        >
          <Upload className={`mx-auto h-12 w-12 ${isDragging ? 'text-primary-500' : 'text-gray-500'}`} />
          <p className="mt-4 text-gray-300">
            Drag and drop files here, or{' '}
            <label className="cursor-pointer text-primary-400 hover:text-primary-300">
              browse
              <input
                type="file"
                multiple
                className="hidden"
                onChange={(e) => e.target.files && handleUpload(e.target.files)}
              />
            </label>
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Supports: ZIP, PNG, JPG, PDF, SVG, and more
          </p>
        </div>

        {files.length > 0 && (
          <div className="mt-8 space-y-3">
            <h2 className="text-sm font-medium text-gray-400">Uploads</h2>
            {files.map((file, index) => (
              <div
                key={`${file.name}-${index}`}
                className="flex items-center gap-3 rounded-lg bg-gray-800 p-4"
              >
                <File className="h-5 w-5 text-gray-400" />
                <span className="flex-1 truncate text-sm text-gray-300">{file.name}</span>
                {file.status === 'uploading' && (
                  <Loader2 className="h-5 w-5 animate-spin text-primary-500" />
                )}
                {file.status === 'success' && (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                )}
                {file.status === 'error' && (
                  <span title={file.message}>
                    <XCircle className="h-5 w-5 text-red-500" />
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
