import { NextRequest, NextResponse } from 'next/server';
import { handleUpload, type HandleUploadBody } from '@vercel/blob/client';

export async function POST(request: NextRequest) {
  const body = (await request.json()) as HandleUploadBody;

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname) => {
        // Log the incoming upload request
        console.log('='.repeat(60));
        console.log('[INGEST] Upload requested');
        console.log('[INGEST] Pathname:', pathname);
        console.log('[INGEST] Timestamp:', new Date().toISOString());
        console.log('='.repeat(60));

        return {
          allowedContentTypes: [
            'image/jpeg',
            'image/png',
            'image/gif',
            'image/svg+xml',
            'image/webp',
            'application/pdf',
            'application/zip',
            'application/x-zip-compressed',
            'application/octet-stream',
            'text/plain',
            'text/csv',
            'application/json',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          ],
          tokenPayload: JSON.stringify({}),
        };
      },
      onUploadCompleted: async ({ blob }) => {
        // Log complete upload details for easy access
        console.log('');
        console.log('*'.repeat(60));
        console.log('[INGEST] UPLOAD COMPLETED');
        console.log('*'.repeat(60));
        console.log('[INGEST] Filename:', blob.pathname);
        console.log('[INGEST] URL:', blob.url);
        console.log('[INGEST] Content-Type:', blob.contentType);
        console.log('[INGEST] Uploaded:', new Date().toISOString());
        console.log('*'.repeat(60));
        console.log('');
      },
    });

    return NextResponse.json(jsonResponse);
  } catch (error) {
    console.error('[INGEST] Upload error:', error);
    return NextResponse.json(
      { error: 'Upload failed' },
      { status: 500 }
    );
  }
}

// GET endpoint to list recent uploads (for debugging)
export async function GET() {
  return NextResponse.json({
    message: 'Check Vercel function logs for upload history',
    instruction: 'Run: vercel logs signal3-pi.vercel.app --follow',
    note: 'All uploads are logged with [INGEST] prefix',
  });
}
