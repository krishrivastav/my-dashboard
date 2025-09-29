
import React, { useState } from "react";
import { BarChart3, FileText, Upload, Eye, PieChart, Brain, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Header from "../components/Header";
import SentimentTabs from "../components/SentimentTabs";
import SummaryCard from "../components/SummaryCard";
import VisualInsights from "../components/VisualInsights";

export default function Dashboard() {
  const [activeMainTab, setActiveMainTab] = useState("sentiment");

  const handleUploadClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.pdf,.doc,.docx,.txt';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        // Here you would typically upload the file to your backend
        alert(`File "${file.name}" selected for upload. This would be processed by your backend.`);
      }
    };
    input.click();
  };

  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <style>
        {`
          @media print {
            body {
              background: white !important;
            }
            header, .main-tabs-nav {
              display: none !important;
            }
            main {
              padding-top: 0 !important;
            }
            .printable-area {
              box-shadow: none !important;
              border: none !important;
              padding: 0 !important;
              margin: 0 !important; /* Ensure no external margins on print */
            }
            .no-print {
              display: none !important;
            }
            @page {
              size: A4;
              margin: 20mm;
            }
          }
        `}
      </style>
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-4 lg:py-8">
        <Tabs value={activeMainTab} onValueChange={setActiveMainTab} className="w-full">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6 lg:mb-8 gap-4 main-tabs-nav">
            <TabsList className="grid grid-cols-2 sm:grid-cols-4 lg:flex lg:w-auto bg-white shadow-sm p-1 rounded-lg h-auto">
              <TabsTrigger value="home" className="gap-1 lg:gap-2 text-xs lg:text-sm py-2 px-2 lg:px-3">
                <FileText className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="hidden sm:inline">Home</span>
                <span className="sm:hidden">Home</span>
              </TabsTrigger>
              <TabsTrigger value="sentiment" className="gap-1 lg:gap-2 text-xs lg:text-sm py-2 px-2 lg:px-3">
                <BarChart3 className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="hidden sm:inline">Sentiment</span>
                <span className="sm:hidden">Sentiment</span>
              </TabsTrigger>
              <TabsTrigger value="ai-summary" className="gap-1 lg:gap-2 text-xs lg:text-sm py-2 px-2 lg:px-3">
                <Brain className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="hidden sm:inline">AI Summary</span>
                <span className="sm:hidden">Summary</span>
              </TabsTrigger>
              <TabsTrigger value="insights" className="gap-1 lg:gap-2 text-xs lg:text-sm py-2 px-2 lg:px-3">
                <PieChart className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="hidden sm:inline">Insights</span>
                <span className="sm:hidden">Insights</span>
              </TabsTrigger>
            </TabsList>
            
            <div className="flex gap-4 w-full lg:w-auto">
              {activeMainTab === "insights" && (
                <Button 
                  onClick={handleDownloadPDF}
                  className="bg-blue-600 hover:bg-blue-700 gap-2 shadow-lg w-full lg:w-auto text-white"
                >
                  <Download className="w-4 h-4 text-white" />
                  Download PDF
                </Button>
              )}
              <Button 
                onClick={handleUploadClick}
                className="bg-purple-600 hover:bg-purple-700 gap-2 shadow-lg w-full lg:w-auto text-white"
              >
                <Upload className="w-4 h-4 text-white" />
                Upload Draft
              </Button>
            </div>
          </div>

          <TabsContent value="home" className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 printable-area">
              <div className="text-center max-w-3xl mx-auto">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  AI-Powered Stakeholder Analysis
                </h2>
                <p className="text-lg text-slate-600 mb-8">
                  Our advanced AI system analyzes thousands of stakeholder comments on draft legislation, 
                  providing comprehensive sentiment analysis, key insights, and actionable summaries for 
                  policy makers and regulatory bodies.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <BarChart3 className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">Sentiment Classification</h3>
                    <p className="text-sm text-slate-600">Automatically categorize comments as positive, supportive, critical/suggestive, concerned, negative.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Brain className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">AI Summaries</h3>
                    <p className="text-sm text-slate-600">Generate concise summaries of key themes and concerns</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <PieChart className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">Visual Analytics</h3>
                    <p className="text-sm text-slate-600">Interactive charts and word clouds for deeper insights</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="sentiment" className="space-y-8 printable-area">
            <SentimentTabs />
          </TabsContent>

          <TabsContent value="ai-summary" className="printable-area">
            <SummaryCard />
          </TabsContent>

          <TabsContent value="insights" className="printable-area">
            <VisualInsights />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
