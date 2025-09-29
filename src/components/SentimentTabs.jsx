import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Sparkles, ThumbsUp, ThumbsDown, AlertTriangle, PenSquare, Building2, Calendar, User, Filter, X } from "lucide-react";

const commentData = {
  positive: [
    { id: 117, text: "This is a landmark reform. The digitization of all compliance under Companies Act 2013 is a game-changer for India's ease of doing business rankings. Our organization gives its unequivocal support.", author: "Rajesh Kumar", organization: "India Inc. Leadership Forum", industry: "Industry Association", role: "President", date: "2024-03-01", section: "Digital Transformation" },
    { id: 118, text: "The introduction of the Social Stock Exchange framework is a visionary move that will unlock unprecedented capital for the social sector. We are extremely optimistic about its transformative potential.", author: "Sarah Williams", organization: "Global Impact Investors", industry: "Banking & Financial Services", role: "Investment Head", date: "2024-03-02", section: "Social Stock Exchange" },
    ...Array.from({ length: 23 }, (_, i) => ({ 
      id: 119 + i, 
      text: "An outstanding and forward-thinking proposal. This will have a profoundly positive impact on the corporate ecosystem.", 
      author: `Stakeholder ${i+1}`, 
      organization: `Organization ${i+1}`, 
      industry: ["IT & Software", "Manufacturing", "Pharmaceuticals", "Banking & Financial Services"][i % 4],
      role: ["CEO", "CFO", "Company Secretary", "Legal Counsel"][i % 4],
      date: "2024-03-03", 
      section: "General Reforms" 
    }))
  ],
  supportive: [
    { id: 1, text: "Section 135 CSR expenditure threshold revision is well-thought and provides much needed relief to small and medium enterprises.", author: "Priya Sharma", organization: "Mumbai Chamber of Commerce", industry: "Industry Association", role: "Secretary General", date: "2024-01-15", section: "Section 135" },
    { id: 2, text: "The proposed amendments regarding digital filing procedures will streamline processes and reduce paperwork. Highly supportive of this initiative.", author: "Amit Gupta", organization: "FICCI Representative", industry: "Industry Association", role: "Policy Head", date: "2024-01-14", section: "Digital Filing" },
    { id: 3, text: "Amendment to allow virtual AGMs permanently is excellent. This will reduce costs for companies and increase shareholder participation.", author: "Dr. Meena Patel", organization: "Indian Institute of Corporate Affairs", industry: "Education", role: "Director", date: "2024-01-13", section: "AGM Provisions" },
    ...Array.from({ length: 47 }, (_, i) => ({ 
      id: 4 + i, 
      text: "This is a good proposal that moves in the right direction. We support the general intent of this amendment.", 
      author: `Professional ${i+1}`, 
      organization: `Company ${i+1}`, 
      industry: ["Manufacturing", "IT & Software", "Banking & Financial Services", "Pharmaceuticals", "Textiles", "Automobile"][i % 6],
      role: ["Company Secretary", "CFO", "Compliance Officer", "Legal Counsel", "CEO"][i % 5],
      date: "2024-02-10", 
      section: "Various" 
    }))
  ],
  criticalSuggestive: [
    { id: 51, text: "While the intent of Section 135 amendments is clear, the implementation timeline requires further clarification to avoid confusion.", author: "Vikram Singh", organization: "Corporate Law Society", industry: "Legal Services", role: "Senior Partner", date: "2024-01-15", section: "Section 135" },
    { id: 52, text: "The proposed changes to audit committee composition have merit, but the one-size-fits-all approach may not work for diverse industries. We suggest a consultation.", author: "Anita Desai", organization: "Audit Committee Institute", industry: "Accounting & Audit", role: "Lead Auditor", date: "2024-01-14", section: "Audit Committee" },
    ...Array.from({ length: 33 }, (_, i) => ({ 
      id: 53 + i, 
      text: "The proposal is sound in principle, but we have reservations about the practical application. More detailed guidelines are necessary.", 
      author: `Professional ${i+1}`, 
      organization: `Firm ${i+1}`, 
      industry: ["Consulting", "Legal Services", "Accounting & Audit", "Banking & Financial Services"][i % 4],
      role: ["Consultant", "Legal Counsel", "Auditor", "Compliance Officer"][i % 4],
      date: "2024-02-15", 
      section: "Implementation" 
    }))
  ],
  concerned: [
    { id: 86, text: "The timeline for filing annual CSR reports is too aggressive. Companies need at least 6 months post-financial year to compile comprehensive data.", author: "Ravi Agarwal", organization: "Corporate CSR Council", industry: "Industry Association", role: "Executive Director", date: "2024-01-14", section: "Section 135" },
    { id: 87, text: "Mandatory quarterly compliance reporting will increase administrative burden without proportionate benefits. This will disproportionately affect smaller companies.", author: "Sunita Jain", organization: "SME Chamber", industry: "Industry Association", role: "President", date: "2024-01-13", section: "Compliance Reporting" },
    ...Array.from({ length: 23 }, (_, i) => ({ 
      id: 88 + i, 
      text: "We believe this amendment will introduce unnecessary complications and increase costs for our members.", 
      author: `Representative ${i+1}`, 
      organization: `Association ${i+1}`, 
      industry: ["Startups/SMEs", "Manufacturing", "Textiles", "Real Estate"][i % 4],
      role: ["CEO", "CFO", "Company Secretary", "Managing Director"][i % 4],
      date: "2024-02-20", 
      section: "Burdensome Compliance" 
    }))
  ],
  negative: [
    { id: 111, text: "The penalty provisions under Clause 12 are excessively punitive. Fines of up to Rs 25 lakh will cripple, not regulate, startups. This clause must be withdrawn immediately.", author: "Karan Mehta", organization: "Small Business Federation", industry: "Startups/SMEs", role: "Founder", date: "2024-01-15", section: "Penalty Provisions" },
    { id: 112, text: "The proposed changes to director liability are dangerously vague and will lead to an exodus of qualified independent directors from boards. This is unacceptable.", author: "Justice (Retd) Malhotra", organization: "Independent Directors Forum", industry: "Legal Services", role: "Independent Director", date: "2024-01-12", section: "Director Liability" },
    ...Array.from({ length: 13 }, (_, i) => ({ 
      id: 113 + i, 
      text: "This proposal is fundamentally flawed and poses a direct threat to business viability. It must be reconsidered entirely.", 
      author: `Critic ${i+1}`, 
      organization: `Organization ${i+1}`, 
      industry: ["Startups/SMEs", "Real Estate", "Textiles", "Automobile"][i % 4],
      role: ["CEO", "Managing Director", "Founder", "Chairman"][i % 4],
      date: "2024-02-25", 
      section: "Core Issues" 
    }))
  ]
};

const summaries = {
  positive: "This segment of stakeholders views the proposed amendments as transformative, game-changing reforms. The feedback is marked by unequivocal support and optimism, with particular emphasis on landmark initiatives such as complete digitization of compliance and the introduction of the Social Stock Exchange.Stakeholders note that digitization under the Companies Act, 2013 will not only simplify compliance but also enhance efficiency, transparency, and ease of doing business—key factors in strengthening India's global competitiveness. The Social Stock Exchange framework is welcomed as a visionary step that can unlock new avenues of capital for non-profits and social enterprises, driving inclusive growth and social impact at scale. Overall, these reforms are seen as bold, forward-looking measures that will deliver profound and lasting benefits for India's corporate and social landscape, creating an ecosystem that fosters innovation, accountability, and sustainable progress.",
  supportive: "This large group of stakeholders expresses consistent and solid support for the proposed reforms, recognizing them as meaningful improvements that align with the practical needs of businesses. The feedback highlights three key areas of appreciation: the revision of CSR expenditure thresholds, which is seen as providing much-needed relief for small and medium enterprises; the introduction of streamlined digital filing procedures, expected to reduce paperwork and enhance efficiency; and the move to permanently allow virtual AGMs, praised for its potential to cut costs while promoting wider shareholder participation. Although the tone of this group is not as effusive as the “extremely positive” segment, the underlying sentiment is still clearly favorable. Stakeholders repeatedly affirm that the reforms represent a step in the right direction, reflecting a balanced mix of approval, pragmatism, and alignment with the government’s overall intent. Broadly, these stakeholders view the amendments as sensible, business-friendly measures that will deliver tangible benefits, strengthen compliance mechanisms, and improve operational ease without imposing unnecessary complexities.",
  criticalSuggestive: "This group's feedback is constructive and conditional. They generally do not oppose the intent behind the amendments but raise important questions about practical implementation. Key themes include the need for clearer guidelines, more realistic timelines, and a less rigid, 'one-size-fits-all' approach.Specifically, stakeholders express the view that while the proposal is sound in principle, many practical aspects require further clarification to avoid confusion and ensure smooth execution. For example, the timeline for implementing Section 135 CSR amendments calls for more detailed communication. The proposed changes to audit committee composition, though meritorious, may not suit all industries equally and warrant broader consultation. Overall, support from this group is contingent on addressing these practical concerns, with emphasis on tailoring guidance to diverse industry needs and providing detailed, actionable directions. Their feedback reflects confidence in the reforms' objectives, paired with a strong preference for flexible, transparent, and well-structured implementation plans.",
  concerned: "This group of stakeholders expresses specific objections to certain provisions of the draft legislation. Their concerns center on tangible negative impacts such as increased administrative burdens, aggressive reporting deadlines, and higher compliance costs, which they feel outweigh the intended benefits. A major issue raised is that the timeline for filing annual CSR reports is too aggressive, with calls for companies to have at least six months after the financial year to compile accurate data. Mandatory quarterly compliance reporting is also seen as an unnecessary administrative burden, especially for smaller companies, potentially leading to disproportionate challenges. Many respondents emphasize that these amendments will introduce additional complications and increased costs for their members. Overall, stakeholders urge reconsideration of timelines, reporting frequencies, and cost implications to ensure the reforms are feasible and fair, particularly for smaller entities. Their feedback reflects concern that without such adjustments, the reforms may place undue strain on companies.",
  negative: "This segment voices strong and urgent opposition to what they perceive as fundamentally flawed provisions. The sentiment is centered on existential threats to businesses, such as crippling financial penalties and unacceptable legal risks for directors. The language used is often urgent, calling for the immediate withdrawal or complete reconsideration of the most damaging clauses."
};

const industries = [
  "All Industries",
  "Banking & Financial Services",
  "IT & Software", 
  "Manufacturing",
  "Pharmaceuticals",
  "Textiles",
  "Automobile",
  "Real Estate",
  "Education",
  "Healthcare",
  "Consulting",
  "Legal Services", 
  "Accounting & Audit",
  "Startups/SMEs",
  "Industry Association"
];

const roles = [
  "All Roles",
  "CEO",
  "CFO",
  "Managing Director",
  "Company Secretary",
  "Legal Counsel",
  "Compliance Officer",
  "Independent Director",
  "Auditor",
  "President",
  "Secretary General",
  "Policy Head",
  "Director",
  "Senior Partner",
  "Lead Auditor",
  "Consultant",
  "Executive Director",
  "Founder",
  "Chairman"
];

export default function SentimentTabs() {
  const [activeTab, setActiveTab] = useState("supportive");
  const [industryFilter, setIndustryFilter] = useState("All Industries");
  const [roleFilter, setRoleFilter] = useState("All Roles");

  const getFilteredComments = (comments) => {
    return comments.filter(comment => {
      const industryMatch = industryFilter === "All Industries" || comment.industry === industryFilter;
      const roleMatch = roleFilter === "All Roles" || comment.role === roleFilter;
      return industryMatch && roleMatch;
    });
  };

  const clearFilters = () => {
    setIndustryFilter("All Industries");
    setRoleFilter("All Roles");
  };

  const hasActiveFilters = industryFilter !== "All Industries" || roleFilter !== "All Roles";

  const renderComments = (comments, sentiment) => {
    const filteredComments = getFilteredComments(comments);
    const sentimentConfig = {
      positive: { Icon: Sparkles, color: "text-teal-600", bg: "bg-teal-100" },
      supportive: { Icon: ThumbsUp, color: "text-green-600", bg: "bg-green-100" },
      criticalSuggestive: { Icon: PenSquare, color: "text-yellow-600", bg: "bg-yellow-100" },
      concerned: { Icon: AlertTriangle, color: "text-orange-600", bg: "bg-orange-100" },
      negative: { Icon: ThumbsDown, color: "text-red-600", bg: "bg-red-100" },
    };
    const { Icon, color, bg } = sentimentConfig[sentiment];
    
    if (filteredComments.length === 0) {
      return (
        <Card className="text-center py-8">
          <CardContent>
            <p className="text-slate-500">No comments found matching the selected filters.</p>
            <Button variant="outline" onClick={clearFilters} className="mt-4">
              <X className="w-4 h-4 mr-2" />
              Clear Filters
            </Button>
          </CardContent>
        </Card>
      );
    }
    
    return (
      <div className="space-y-4">
        {filteredComments.map((comment) => (
          <Card key={comment.id} className="hover:shadow-md transition-shadow duration-200 border-l-4 border-l-purple-500">
            <CardContent className="pt-4">
              <div className="flex items-start gap-3 mb-3">
                <div className={`p-2 rounded-full ${bg} ${color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="text-slate-700 leading-relaxed mb-3">{comment.text}</p>
                  <div className="flex flex-wrap items-center gap-2 text-sm mb-2">
                    <div className="flex items-center gap-1 text-slate-600">
                      <User className="w-3 h-3" />
                      <span className="font-medium">{comment.author}</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-500">
                      <Building2 className="w-3 h-3" />
                      <span>{comment.organization}</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-500">
                      <Calendar className="w-3 h-3" />
                      <span>{comment.date}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="text-purple-600 border-purple-200">
                      {comment.section}
                    </Badge>
                    <Badge variant="outline" className="text-blue-600 border-blue-200">
                      {comment.industry}
                    </Badge>
                    <Badge variant="outline" className="text-green-600 border-green-200">
                      {comment.role}
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
    const filteredComments = getFilteredComments(commentData[sentiment]);
    
    return (
        <Card className={`${bg} ${border}`}>
            <CardHeader>
            <CardTitle className={`${color} flex items-center gap-2`}>
                <Building2 className="w-5 h-5" />
                {title} ({filteredComments.length} comments)
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
        
        {/* Filter Controls */}
        <div className="mt-4 space-y-3">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <Filter className="w-5 h-5 text-slate-600 mt-2 sm:mt-0" />
            <div className="flex flex-col sm:flex-row gap-3 flex-1">
              <Select value={industryFilter} onValueChange={setIndustryFilter}>
                <SelectTrigger className="w-full sm:w-64">
                  <SelectValue placeholder="Filter by Industry" />
                </SelectTrigger>
                <SelectContent className="bg-white shadow-lg">
                  {industries.map(industry => (
                    <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={roleFilter} onValueChange={setRoleFilter}>
                <SelectTrigger className="w-full sm:w-64">
                  <SelectValue placeholder="Filter by Role" />
                </SelectTrigger>
                <SelectContent className="bg-white shadow-lg">
                  {roles.map(role => (
                    <SelectItem key={role} value={role}>{role}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {hasActiveFilters && (
                <Button variant="outline" size="sm" onClick={clearFilters}>
                  <X className="w-4 h-4 mr-1" />
                  Clear
                </Button>
              )}
            </div>
          </div>
          
          {hasActiveFilters && (
            <div className="flex flex-wrap gap-2">
              {industryFilter !== "All Industries" && (
                <Badge variant="secondary" className="text-xs">
                  Industry: {industryFilter}
                </Badge>
              )}
              {roleFilter !== "All Roles" && (
                <Badge variant="secondary" className="text-xs">
                  Role: {roleFilter}
                </Badge>
              )}
            </div>
          )}
        </div>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="px-4 lg:px-6 pt-4 lg:pt-6">
          <div className="overflow-x-auto">
            <TabsList className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 bg-slate-100 h-auto min-w-full">
               <TabsTrigger value="positive" className="flex items-center gap-1 lg:gap-2 data-[state=active]:bg-teal-50 data-[state=active]:text-teal-700 text-xs lg:text-sm px-2 lg:px-3 py-2">
                <Sparkles className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="hidden sm:inline">Positive</span>
                <span className="sm:hidden">Pos</span>
                <span>({getFilteredComments(commentData.positive).length})</span>
              </TabsTrigger>
              <TabsTrigger value="supportive" className="flex items-center gap-1 lg:gap-2 data-[state=active]:bg-green-50 data-[state=active]:text-green-700 text-xs lg:text-sm px-2 lg:px-3 py-2">
                <ThumbsUp className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="hidden sm:inline">Supportive</span>
                <span className="sm:hidden">Supp</span>
                <span>({getFilteredComments(commentData.supportive).length})</span>
              </TabsTrigger>
              <TabsTrigger value="criticalSuggestive" className="flex items-center gap-1 lg:gap-2 data-[state=active]:bg-yellow-50 data-[state=active]:text-yellow-700 text-xs lg:text-sm px-2 lg:px-3 py-2">
                <PenSquare className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="hidden sm:inline">Critical/Suggestive</span>
                <span className="sm:hidden">Crit/Sug</span>
                <span>({getFilteredComments(commentData.criticalSuggestive).length})</span>
              </TabsTrigger>
               <TabsTrigger value="concerned" className="flex items-center gap-1 lg:gap-2 data-[state=active]:bg-orange-50 data-[state=active]:text-orange-700 text-xs lg:text-sm px-2 lg:px-3 py-2">
                <AlertTriangle className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="hidden sm:inline">Concerned</span>
                <span className="sm:hidden">Concern</span>
                <span>({getFilteredComments(commentData.concerned).length})</span>
              </TabsTrigger>
              <TabsTrigger value="negative" className="flex items-center gap-1 lg:gap-2 data-[state=active]:bg-red-50 data-[state=active]:text-red-700 text-xs lg:text-sm px-2 lg:px-3 py-2">
                <ThumbsDown className="w-3 h-3 lg:w-4 lg:h-4" />
                <span className="hidden sm:inline">Negative</span>
                <span className="sm:hidden">Neg</span>
                <span>({getFilteredComments(commentData.negative).length})</span>
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