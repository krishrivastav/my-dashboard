
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, TrendingUp, AlertTriangle, Sparkles, ThumbsUp, PenSquare, ThumbsDown, Lightbulb } from "lucide-react";

export default function SummaryCard() {
  const stats = [
    { title: "Positive", count: 25, Icon: Sparkles, color: "text-teal-600", bg: "bg-teal-100" },
    { title: "Supportive", count: 50, Icon: ThumbsUp, color: "text-green-600", bg: "bg-green-100" },
    { title: "Critical", count: 35, Icon: PenSquare, color: "text-yellow-600", bg: "bg-yellow-100" },
    { title: "Concerned", count: 25, Icon: AlertTriangle, color: "text-orange-600", bg: "bg-orange-100" },
    { title: "Negative", count: 15, Icon: ThumbsDown, color: "text-red-600", bg: "bg-red-100" },
  ];

  return (
    <div className="space-y-6 lg:space-y-8">
      <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200 shadow-lg">
        <CardHeader className="pb-4 lg:pb-6">
          <CardTitle className="flex items-center gap-3 text-xl lg:text-2xl xl:text-3xl text-slate-900">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-purple-600 rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
            </div>
            <span className="leading-tight">Next_code AI Analysis Summary</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 lg:space-y-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4 mb-6 lg:mb-8">
            {stats.map(stat => (
              <div key={stat.title} className="text-center p-3 lg:p-4 bg-white rounded-lg shadow-sm">
                <div className={`w-8 h-8 lg:w-10 lg:h-10 ${stat.bg} rounded-full flex items-center justify-center mx-auto mb-2`}>
                  <stat.Icon className={`w-4 h-4 lg:w-5 lg:h-5 ${stat.color}`} />
                </div>
                <div className={`text-xl lg:text-2xl font-bold ${stat.color} mb-1`}>{stat.count}</div>
                <div className="text-xs lg:text-sm text-slate-600">{stat.title}</div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg p-4 lg:p-6 xl:p-8 shadow-sm">
            <h3 className="font-bold text-lg lg:text-xl xl:text-2xl text-slate-900 mb-4 lg:mb-6 flex items-center gap-3">
              <TrendingUp className="w-5 h-5 lg:w-6 lg:h-6 text-purple-600" />
              Key Themes Across Sentiments
            </h3>
            
            <div className="space-y-4 lg:space-y-6">
              <div>
                <h4 className="font-semibold text-base lg:text-lg text-slate-800 mb-3">Dominant Positive & Supportive Themes:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-green-100 text-green-800 border-green-300 text-xs lg:text-sm px-2 lg:px-3 py-1">Complete Digitization</Badge>
                  <Badge className="bg-green-100 text-green-800 border-green-300 text-xs lg:text-sm px-2 lg:px-3 py-1">SME Relief Measures</Badge>
                  <Badge className="bg-green-100 text-green-800 border-green-300 text-xs lg:text-sm px-2 lg:px-3 py-1">Social Sector Funding</Badge>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-base lg:text-lg text-slate-800 mb-3">Core Negative & Concerned Themes:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-red-100 text-red-800 border-red-300 text-xs lg:text-sm px-2 lg:px-3 py-1">Punitive Penalty Structure</Badge>
                  <Badge className="bg-red-100 text-red-800 border-red-300 text-xs lg:text-sm px-2 lg:px-3 py-1">Unrealistic Compliance Deadlines</Badge>
                  <Badge className="bg-red-100 text-red-800 border-red-300 text-xs lg:text-sm px-2 lg:px-3 py-1">Vague Director Liability</Badge>
                </div>
              </div>

               <div>
                <h4 className="font-semibold text-base lg:text-lg text-slate-800 mb-3">Primary Areas for Consultation:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300 text-xs lg:text-sm px-2 lg:px-3 py-1">Practical Implementation Roadmaps</Badge>
                  <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300 text-xs lg:text-sm px-2 lg:px-3 py-1">Industry-Specific Nuances</Badge>
                  <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300 text-xs lg:text-sm px-2 lg:px-3 py-1">Clearer Definitions</Badge>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-4 lg:p-6 xl:p-8 text-white shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white bg-opacity-20 rounded-xl flex items-center justify-center">
                <Lightbulb className="w-5 h-5 lg:w-6 lg:h-6" />
              </div>
              <h3 className="font-bold text-lg lg:text-xl xl:text-2xl">Next_code AI Recommendations</h3>
            </div>
            <div className="text-sm lg:text-base xl:text-lg leading-relaxed space-y-3 lg:space-y-4">
              <p>
                The analysis of 150 comments shows a strong but polarized response. While a combined 75 comments (50%) are broadly supportive ('Positive' and 'Supportive'), a significant 40 comments (27%) voice negative or concerned objections. This indicates that while the policy direction is appreciated, specific provisions are highly contentious.
              </p>
              <p>
                The 35 'Critical/Suggestive' comments represent a crucial swing group whose support can be won by addressing practical implementation issues. They are not against the reforms but are wary of execution.
              </p>
              <p>
                <strong>Our AI recommends a multi-tiered strategic response:</strong>
                <ol className="list-decimal list-inside mt-2 space-y-2">
                  <li><strong>Fast-Track & Amplify:</strong> Immediately proceed with and publicize the overwhelmingly popular reforms (e.g., digitization) to build strong positive momentum.</li>
                  <li><strong>Isolate & Re-evaluate:</strong> Isolate the clauses receiving 'Negative' feedback (e.g., penalties, director liability). Form a high-level committee to redraft these specific sections in consultation with key critics to prevent widespread industry pushback.</li>
                  <li><strong>Engage & Clarify:</strong> Proactively engage with the 'Critical/Suggestive' and 'Concerned' groups by releasing detailed FAQs, implementation roadmaps, and hosting workshops. Converting these segments is key to achieving a supermajority of support.</li>
                </ol>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
