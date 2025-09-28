import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { TrendingUp, Cloud, Hash } from "lucide-react";

const sentimentData = [
  { name: 'Positive', value: 16.7, count: 25, color: '#14B8A6' },
  { name: 'Supportive', value: 33.3, count: 50, color: '#10B981' },
  { name: 'Critical/Suggestive', value: 23.3, count: 35, color: '#F59E0B' },
  { name: 'Concerned', value: 16.7, count: 25, color: '#F97316' },
  { name: 'Negative', value: 10.0, count: 15, color: '#EF4444' }
];

const topicsData = [
  { topic: 'CSR Provisions', mentions: 18, sentiment: 'Mixed' },
  { topic: 'Penalty Framework', mentions: 15, sentiment: 'Negative' },
  { topic: 'Digital Procedures', mentions: 14, sentiment: 'Positive' },
  { topic: 'Compliance Timeline', mentions: 12, sentiment: 'Negative' },
  { topic: 'Director Liability', mentions: 11, sentiment: 'Mixed' },
  { topic: 'SME Exemptions', mentions: 9, sentiment: 'Positive' },
];

const keyTerms = [
  { term: 'Section 135', frequency: 68, words: 2, size: 'text-4xl' },
  { term: 'CSR', frequency: 62, words: 1, size: 'text-4xl' },
  { term: 'Compliance', frequency: 58, words: 1, size: 'text-4xl' },
  { term: 'Amendment', frequency: 54, words: 1, size: 'text-3xl' },
  { term: 'Penalty', frequency: 48, words: 1, size: 'text-3xl' },
  { term: 'Companies Act 2013', frequency: 45, words: 3, size: 'text-3xl' },
  { term: 'SME', frequency: 42, words: 1, size: 'text-2xl' },
  { term: 'Disclosure', frequency: 38, words: 1, size: 'text-2xl' },
  { term: 'Audit', frequency: 35, words: 1, size: 'text-2xl' },
  { term: 'Timeline', frequency: 32, words: 1, size: 'text-xl' },
  { term: 'Governance', frequency: 28, words: 1, size: 'text-xl' },
  { term: 'Digital Filing', frequency: 26, words: 2, size: 'text-xl' },
  { term: 'Startup', frequency: 24, words: 1, size: 'text-lg' },
  { term: 'Director Liability', frequency: 22, words: 2, size: 'text-lg' },
  { term: 'Social Stock Exchange', frequency: 20, words: 3, size: 'text-lg' },
  { term: 'Virtual AGM', frequency: 18, words: 2, size: 'text-base' },
  { term: 'Digitization', frequency: 16, words: 1, size: 'text-base' },
  { term: 'Implementation', frequency: 15, words: 1, size: 'text-base' },
  { term: 'Industry Association', frequency: 14, words: 2, size: 'text-base' },
  { term: 'Financial Services', frequency: 13, words: 2, size: 'text-base' },
  { term: 'Manufacturing', frequency: 12, words: 1, size: 'text-sm' },
  { term: 'Legal Counsel', frequency: 11, words: 2, size: 'text-sm' },
  { term: 'Company Secretary', frequency: 10, words: 2, size: 'text-sm' }
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-slate-300 rounded-lg shadow-lg">
        <p className="font-medium">{`${payload[0].name}: ${payload[0].value.toFixed(1)}%`}</p>
        <p className="text-sm text-slate-600">{`Count: ${payload[0].payload.count} comments`}</p>
      </div>
    );
  }
  return null;
};

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  // Only show labels for segments larger than 8% to avoid clutter on mobile
  if (percent < 0.08) return null;

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" className="text-xs font-medium">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function VisualInsights() {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

//   const sizeMap = { 
//   'text-4xl': 'text-2xl', 
//   'text-3xl': 'text-xl', 
//   'text-2xl': 'text-lg',
//   'text-xl': 'text-base', // optional: you can add more sizes if needed
// };

const sizeMap = {
  'text-4xl': 'text-2xl',
  'text-3xl': 'text-xl',
  'text-2xl': 'text-lg',
  'text-xl': 'text-base',
  'text-lg': 'text-sm',
  'text-base': 'text-xs',
  'text-sm': 'text-xs'
};

  return (
    <div className="space-y-6 lg:space-y-8">
      <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-4 lg:p-6">
        <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4 lg:mb-6 flex items-center gap-3">
          <TrendingUp className="w-5 h-5 lg:w-6 lg:h-6 text-purple-600" />
          Visual Analytics Dashboard
        </h2>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Pie Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base lg:text-lg">
                <Hash className="w-4 h-4 lg:w-5 lg:h-5 text-purple-600" />
                Sentiment Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={sentimentData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={isClient ? renderCustomizedLabel : false}
                    outerRadius={110}
                    innerRadius={50}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                  >
                    {sentimentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {sentimentData.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div
                      className="w-3 h-3 lg:w-4 lg:h-4 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-xs lg:text-sm text-slate-600">
                      {item.name}: {item.count} comments ({item.value.toFixed(1)}%)
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Topic Analysis */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base lg:text-lg">
                <Hash className="w-4 h-4 lg:w-5 lg:h-5 text-purple-600" />
                Top Discussion Topics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topicsData.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 lg:gap-3 mb-1">
                        <span className="font-medium text-sm lg:text-base text-slate-800 truncate">{topic.topic}</span>
                        <span className={`text-xs px-2 py-1 rounded-full flex-shrink-0 ${
                          topic.sentiment === 'Positive' ? 'bg-green-100 text-green-700' :
                          topic.sentiment === 'Negative' ? 'bg-red-100 text-red-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {topic.sentiment}
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className="bg-purple-600 h-2 rounded-full"
                          style={{ width: `${(topic.mentions / 18) * 100}%` }}
                        />
                      </div>
                    </div>
                    <span className="ml-2 font-medium text-slate-600 text-sm lg:text-base flex-shrink-0">{topic.mentions}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Word Cloud */}
        <Card className="mt-6 lg:mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base lg:text-lg">
              <Cloud className="w-4 h-4 lg:w-5 lg:h-5 text-indigo-600" />
              Key Terms & Frequency
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-4 lg:p-8 min-h-[250px] lg:min-h-[350px] flex flex-wrap items-center justify-center gap-2 lg:gap-4"> */}
                        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-4 lg:p-8 min-h-[250px] lg:min-h-[350px] flex flex-wrap items-center justify-center gap-2 lg:gap-4">
              {/* {keyTerms.map((term, index) => (
                <span
                  key={index}
                  className={`${term.size.replace('4xl', '2xl').replace('3xl', 'xl').replace('2xl', 'lg')} lg:${term.size} font-bold transition-all duration-300 hover:scale-110 cursor-pointer text-center`}
                  style={{
                    color: `hsl(${(term.frequency * 5) % 360}, 70%, 50%)`,
                    opacity: Math.max(0.6, term.frequency / 68)
                  }}
                  title={`${term.term}: ${term.frequency} mentions, ${term.words} word${term.words > 1 ? 's' : ''}`}
                >
                  {term.term}
                </span>
              ))} */}
{keyTerms.map((term, index) => {
  const smallSize = sizeMap[term.size] || term.size;

  return (
    <span
      key={index}
      className={`${smallSize} font-bold transition-all duration-300 hover:scale-110 cursor-pointer text-center`}
      style={{
        color: `hsl(${(term.frequency * 5) % 360}, 70%, 50%)`,
        opacity: Math.max(0.6, term.frequency / 68)
      }}
      title={`${term.term}: ${term.frequency} mentions, ${term.words} word${term.words > 1 ? 's' : ''}`}
    >
      {term.term}
    </span>
  );
})}
            </div>
            <div className="mt-4 text-center text-xs lg:text-sm text-slate-500">
              <p>Hover over terms to see frequency count and word count. Larger text indicates higher frequency of mentions.</p>
            </div>
          </CardContent>
        </Card>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mt-6 lg:mt-8">
          <Card className="text-center">
            <CardContent className="pt-4 lg:pt-6">
              <div className="text-2xl lg:text-3xl font-bold text-purple-600 mb-2">150</div>
              <div className="text-xs lg:text-sm text-slate-600">Total Comments</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-4 lg:pt-6">
              <div className="text-2xl lg:text-3xl font-bold text-green-600 mb-2">85+</div>
              <div className="text-xs lg:text-sm text-slate-600">Organizations</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-4 lg:pt-6">
              <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-2">15</div>
              <div className="text-xs lg:text-sm text-slate-600">Industries</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-4 lg:pt-6">
              <div className="text-2xl lg:text-3xl font-bold text-orange-600 mb-2">94%</div>
              <div className="text-xs lg:text-sm text-slate-600">AI Accuracy</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}