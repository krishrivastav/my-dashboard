
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ThumbsUp, ThumbsDown, AlertTriangle, PenSquare, Building2, Calendar, User } from "lucide-react";

const commentData = {
  positive: [
    { id: 117, text: "This is a landmark reform. The digitization of all compliance under Companies Act 2013 is a game-changer for India's ease of doing business rankings. Our organization gives its unequivocal support.", author: "India Inc. Leadership Forum", date: "2024-03-01", section: "Digital Transformation" },
    { id: 118, text: "The introduction of the Social Stock Exchange framework is a visionary move that will unlock unprecedented capital for the social sector. We are extremely optimistic about its transformative potential.", author: "Global Impact Investors", date: "2024-03-02", section: "Social Stock Exchange" },
    ...Array.from({ length: 23 }, (_, i) => ({ id: 119 + i, text: "An outstanding and forward-thinking proposal. This will have a profoundly positive impact on the corporate ecosystem.", author: `Enthusiastic Stakeholder ${i+1}`, date: "2024-03-03", section: "General Reforms" }))
  ],
  supportive: [
    { id: 1, text: "Section 135 CSR expenditure threshold revision is well-thought and provides much needed relief to small and medium enterprises.", author: "Mumbai Chamber of Commerce", date: "2024-01-15", section: "Section 135" },
    { id: 2, text: "The proposed amendments regarding digital filing procedures will streamline processes and reduce paperwork. Highly supportive of this initiative.", author: "FICCI Representative", date: "2024-01-14", section: "Digital Filing" },
    { id: 3, text: "Amendment to allow virtual AGMs permanently is excellent. This will reduce costs for companies and increase shareholder participation.", author: "Indian Institute of Corporate Affairs", date: "2024-01-13", section: "AGM Provisions" },
    ...Array.from({ length: 47 }, (_, i) => ({ id: 4 + i, text: "This is a good proposal that moves in the right direction. We support the general intent of this amendment.", author: `Supportive Body ${i+1}`, date: "2024-02-10", section: "Various" }))
  ],
  criticalSuggestive: [
    { id: 51, text: "While the intent of Section 135 amendments is clear, the implementation timeline requires further clarification to avoid confusion.", author: "Corporate Law Society", date: "2024-01-15", section: "Section 135" },
    { id: 52, text: "The proposed changes to audit committee composition have merit, but the one-size-fits-all approach may not work for diverse industries. We suggest a consultation.", author: "Audit Committee Institute", date: "2024-01-14", section: "Audit Committee" },
    ...Array.from({ length: 33 }, (_, i) => ({ id: 53 + i, text: "The proposal is sound in principle, but we have reservations about the practical application. More detailed guidelines are necessary.", author: `Concerned Professional ${i+1}`, date: "2024-02-15", section: "Implementation" }))
  ],
  concerned: [
    { id: 86, text: "The timeline for filing annual CSR reports is too aggressive. Companies need at least 6 months post-financial year to compile comprehensive data.", author: "Corporate CSR Council", date: "2024-01-14", section: "Section 135" },
    { id: 87, text: "Mandatory quarterly compliance reporting will increase administrative burden without proportionate benefits. This will disproportionately affect smaller companies.", author: "SME Chamber", date: "2024-01-13", section: "Compliance Reporting" },
    ...Array.from({ length: 23 }, (_, i) => ({ id: 88 + i, text: "We believe this amendment will introduce unnecessary complications and increase costs for our members.", author: `Opposing Organization ${i+1}`, date: "2024-02-20", section: "Burdensome Compliance" }))
  ],
  negative: [
    { id: 111, text: "The penalty provisions under Clause 12 are excessively punitive. Fines of up to Rs 25 lakh will cripple, not regulate, startups. This clause must be withdrawn immediately.", author: "Small Business Federation", date: "2024-01-15", section: "Penalty Provisions" },
    { id: 112, text: "The proposed changes to director liability are dangerously vague and will lead to an exodus of qualified independent directors from boards. This is unacceptable.", author: "Independent Directors Forum", date: "2024-01-12", section: "Director Liability" },
    ...Array.from({ length: 13 }, (_, i) => ({ id: 113 + i, text: "This proposal is fundamentally flawed and poses a direct threat to business viability. It must be reconsidered entirely.", author: `Vocal Critic ${i+1}`, date: "2024-02-25", section: "Core Issues" }))
  ]
};

const summaries = {
  positive: "This segment of stakeholders views the proposed amendments as transformative, game-changing reforms. The feedback is characterized by unequivocal support and excitement, particularly for large-scale initiatives like complete digitization and the Social Stock Exchange. These stakeholders believe the changes will have a profound and lasting positive impact on India's business landscape.",
  supportive: "This large group expresses solid support for the direction of the reforms. They appreciate the practical benefits, such as reduced compliance burdens for SMEs, streamlined processes through digital filing, and cost savings from virtual AGMs. While not as effusive as the 'Positive' group, they see the amendments as a significant and welcome step forward.",
  criticalSuggestive: "This group's feedback is constructive and conditional. They generally do not oppose the intent behind the amendments but raise important questions about practical implementation. Key themes include the need for clearer guidelines, more realistic timelines, and a less rigid, 'one-size-fits-all' approach. Their support is contingent on these practical concerns being addressed.",
  concerned: "Stakeholders in this category express direct objections to specific aspects of the draft legislation. Their concerns are focused on tangible negative impacts, such as increased administrative burdens, aggressive reporting deadlines, and compliance costs that they believe outweigh the benefits. They argue that certain proposals will create unnecessary complications and financial strain, especially for smaller entities.",
  negative: "This segment voices strong and urgent opposition to what they perceive as fundamentally flawed provisions. The sentiment is centered on existential threats to businesses, such as crippling financial penalties and unacceptable legal risks for directors. The language used is often urgent, calling for the immediate withdrawal or complete reconsideration of the most damaging clauses."
};

export default function SentimentTabs() {
  const [activeTab, setActiveTab] = useState("supportive");

  const renderComments = (comments, sentiment) => {
    const sentimentConfig = {
      positive: { Icon: Sparkles, color: "text-teal-600", bg: "bg-teal-100" },
      supportive: { Icon: ThumbsUp, color: "text-green-600", bg: "bg-green-100" },
      criticalSuggestive: { Icon: PenSquare, color: "text-yellow-600", bg: "bg-yellow-100" },
      concerned: { Icon: AlertTriangle, color: "text-orange-600", bg: "bg-orange-100" },
      negative: { Icon: ThumbsDown, color: "text-red-600", bg: "bg-red-100" },
    };
    const { Icon, color, bg } = sentimentConfig[sentiment];
    
    return (
      <div className="space-y-4">
        {comments.map((comment) => (
          <Card key={comment.id} className="hover:shadow-md transition-shadow duration-200 border-l-4 border-l-purple-500">
            <CardContent className="pt-4">
              <div className="flex items-start gap-3 mb-3">
                <div className={`p-2 rounded-full ${bg} ${color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="text-slate-700 leading-relaxed mb-3">{comment.text}</p>
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <div className="flex items-center gap-1 text-slate-500">
                      <User className="w-3 h-3" />
                      <span>{comment.author}</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-500">
                      <Calendar className="w-3 h-3" />
                      <span>{comment.date}</span>
                    </div>
                    <Badge variant="outline" className="text-purple-600 border-purple-200">
                      {comment.section}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  const renderSummaryCard = (sentiment, title) => {
     const sentimentConfig = {
      positive: { Icon: Sparkles, color: "text-teal-800", bg: "bg-teal-50", border: "border-teal-200" },
      supportive: { Icon: ThumbsUp, color: "text-green-800", bg: "bg-green-50", border: "border-green-200" },
      criticalSuggestive: { Icon: PenSquare, color: "text-yellow-800", bg: "bg-yellow-50", border: "border-yellow-200" },
      concerned: { Icon: AlertTriangle, color: "text-orange-800", bg: "bg-orange-50", border: "border-orange-200" },
      negative: { Icon: ThumbsDown, color: "text-red-800", bg: "bg-red-50", border: "border-red-200" },
    };
    const { Icon, color, bg, border } = sentimentConfig[sentiment];
    return (
        <Card className={`${bg} ${border}`}>
            <CardHeader>
            <CardTitle className={`${color} flex items-center gap-2`}>
                <Building2 className="w-5 h-5" />
                {title}
            </CardTitle>
            </CardHeader>
            <CardContent>
            <p className={color}>{summaries[sentiment]}</p>
            </CardContent>
        </Card>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200">
      <div className="p-4 lg:p-6 border-b border-slate-200">
        <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-2">Sentiment Analysis</h2>
        <p className="text-sm lg:text-base text-slate-600">AI-categorized stakeholder feedback on proposed amendments</p>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="px-4 lg:px-6 pt-4 lg:pt-6">
          <div className="overflow-x-auto">
            <TabsList className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 bg-slate-100 h-auto min-w-max sm:min-w-full">
               <TabsTrigger value="positive" className="flex items-center gap-1 lg:gap-2 data-[state=active]:bg-teal-50 data-[state=active]:text-teal-700 text-xs lg:text-sm px-2 lg:px-3 py-2">
                <Sparkles className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="hidden sm:inline">Positive</span>
                <span className="sm:hidden">Pos</span>
                <span>({commentData.positive.length})</span>
              </TabsTrigger>
              <TabsTrigger value="supportive" className="flex items-center gap-1 lg:gap-2 data-[state=active]:bg-green-50 data-[state=active]:text-green-700 text-xs lg:text-sm px-2 lg:px-3 py-2">
                <ThumbsUp className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="hidden sm:inline">Supportive</span>
                <span className="sm:hidden">Supp</span>
                <span>({commentData.supportive.length})</span>
              </TabsTrigger>
              <TabsTrigger value="criticalSuggestive" className="flex items-center gap-1 lg:gap-2 data-[state=active]:bg-yellow-50 data-[state=active]:text-yellow-700 text-xs lg:text-sm px-2 lg:px-3 py-2">
                <PenSquare className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="hidden sm:inline">Critical/Suggestive</span>
                <span className="sm:hidden">Crit/Sug</span>
                <span>({commentData.criticalSuggestive.length})</span>
              </TabsTrigger>
               <TabsTrigger value="concerned" className="flex items-center gap-1 lg:gap-2 data-[state=active]:bg-orange-50 data-[state=active]:text-orange-700 text-xs lg:text-sm px-2 lg:px-3 py-2">
                <AlertTriangle className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="hidden sm:inline">Concerned</span>
                <span className="sm:hidden">Concern</span>
                <span>({commentData.concerned.length})</span>
              </TabsTrigger>
              <TabsTrigger value="negative" className="flex items-center gap-1 lg:gap-2 data-[state=active]:bg-red-50 data-[state=active]:text-red-700 text-xs lg:text-sm px-2 lg:px-3 py-2">
                <ThumbsDown className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="hidden sm:inline">Negative</span>
                <span className="sm:hidden">Neg</span>
                <span>({commentData.negative.length})</span>
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        <div className="p-4 lg:p-6">
          <TabsContent value="positive" className="space-y-6 mt-0">
            {renderSummaryCard("positive", "AI Summary - Transformative Support")}
            {renderComments(commentData.positive, "positive")}
          </TabsContent>
          <TabsContent value="supportive" className="space-y-6 mt-0">
            {renderSummaryCard("supportive", "AI Summary - Broadly Supportive")}
            {renderComments(commentData.supportive, "supportive")}
          </TabsContent>
          <TabsContent value="criticalSuggestive" className="space-y-6 mt-0">
            {renderSummaryCard("criticalSuggestive", "AI Summary - Constructive Criticism")}
            {renderComments(commentData.criticalSuggestive, "criticalSuggestive")}
          </TabsContent>
          <TabsContent value="concerned" className="space-y-6 mt-0">
            {renderSummaryCard("concerned", "AI Summary - Specific Objections")}
            {renderComments(commentData.concerned, "concerned")}
          </TabsContent>
          <TabsContent value="negative" className="space-y-6 mt-0">
            {renderSummaryCard("negative", "AI Summary - Urgent Opposition")}
            {renderComments(commentData.negative, "negative")}
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
