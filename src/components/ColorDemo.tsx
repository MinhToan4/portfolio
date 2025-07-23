'use client';

import { useDarkMode } from '@/components/DarkModeProvider';

export default function ColorDemo() {
  const { isDarkMode, mounted } = useDarkMode();

  if (!mounted) return null;

  return (
    <div className="fixed top-20 left-4 p-6 bg-white border border-gray-200 rounded-lg shadow-lg max-w-sm">
      <h3 className="text-lg font-bold text-gray-900 mb-4">
        Color Demo - {isDarkMode ? 'Dark' : 'Light'} Mode
      </h3>
      
      <div className="space-y-3">
        <div className="p-3 bg-white border border-gray-200 rounded">
          <p className="text-gray-900 font-medium">Primary Text</p>
          <p className="text-gray-700 text-sm">Secondary Text</p>
          <p className="text-gray-500 text-sm">Muted Text</p>
        </div>
        
        <div className="p-3 bg-gray-50 rounded">
          <p className="text-gray-800">Content on background</p>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-white border border-gray-300 rounded"></div>
          <span className="text-sm text-gray-600">Background swatch</span>
        </div>
      </div>
      
      <div className="mt-4 text-xs text-gray-500">
        Body BG: {isDarkMode ? '#111827' : '#ffffff'}
        <br />
        Text: {isDarkMode ? '#f9fafb' : '#1f2937'}
      </div>
    </div>
  );
}
