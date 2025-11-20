import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { CalendarIcon, Upload } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import LoadingSpinner from "@/components/LoadingSpinner";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

const applicationSchema = z.object({
  // Personal Information
  firstName: z.string().trim().min(2, "First name must be at least 2 characters").max(100, "First name must be less than 100 characters"),
  lastName: z.string().trim().min(2, "Last name must be at least 2 characters").max(100, "Last name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Phone number must be at least 10 characters").max(20, "Phone number must be less than 20 characters"),
  dateOfBirth: z.date({
    required_error: "Date of birth is required",
  }).refine((date) => {
    const age = new Date().getFullYear() - date.getFullYear();
    return age >= 18 && age <= 100;
  }, "You must be between 18 and 100 years old"),
  nationality: z.string().trim().min(2, "Nationality is required").max(100, "Nationality must be less than 100 characters"),
  countryOfResidence: z.string().trim().min(2, "Country of residence is required").max(100, "Country must be less than 100 characters"),
  
  // Academic Information
  currentInstitution: z.string().trim().min(2, "Institution name is required").max(200, "Institution name must be less than 200 characters"),
  fieldOfStudy: z.string().trim().min(2, "Field of study is required").max(200, "Field of study must be less than 200 characters"),
  currentLevel: z.enum(["undergraduate", "masters", "phd", "postdoc", "early-career"], {
    required_error: "Please select your current academic level",
  }),
  
  // Award Selection
  awardCategory: z.enum([
    "science-leadership-awandare",
    "science-leadership-kwiatkowski",
    "excellence-amenga-etego",
    "excellence-rockett",
    "excellence-tingbani",
    "excellence-mensah",
    "research-small-grant",
    "research-innovation",
    "research-travel"
  ], {
    required_error: "Please select an award category",
  }),
  
  // Application Details
  researchInterests: z.string().trim().min(100, "Please provide at least 100 characters").max(1000, "Research interests must be less than 1000 characters"),
  motivation: z.string().trim().min(200, "Please provide at least 200 characters").max(2000, "Motivation statement must be less than 2000 characters"),
  achievements: z.string().trim().min(100, "Please provide at least 100 characters").max(1500, "Achievements must be less than 1500 characters"),
  
  // References
  referee1Name: z.string().trim().min(2, "Referee name is required").max(100, "Name must be less than 100 characters"),
  referee1Email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  referee1Institution: z.string().trim().min(2, "Institution is required").max(200, "Institution must be less than 200 characters"),
  
  referee2Name: z.string().trim().min(2, "Referee name is required").max(100, "Name must be less than 100 characters"),
  referee2Email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  referee2Institution: z.string().trim().min(2, "Institution is required").max(200, "Institution must be less than 200 characters"),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

const ApplicationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [transcriptFile, setTranscriptFile] = useState<File | null>(null);

  const form = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      nationality: "",
      countryOfResidence: "",
      currentInstitution: "",
      fieldOfStudy: "",
      researchInterests: "",
      motivation: "",
      achievements: "",
      referee1Name: "",
      referee1Email: "",
      referee1Institution: "",
      referee2Name: "",
      referee2Email: "",
      referee2Institution: "",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'cv' | 'transcript') => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > MAX_FILE_SIZE) {
      toast.error("File size must be less than 5MB");
      return;
    }

    if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
      toast.error("Please upload a PDF or Word document");
      return;
    }

    if (type === 'cv') {
      setCvFile(file);
      toast.success("CV uploaded successfully");
    } else {
      setTranscriptFile(file);
      toast.success("Transcript uploaded successfully");
    }
  };

  const onSubmit = async (data: ApplicationFormData) => {
    if (!cvFile) {
      toast.error("Please upload your CV");
      return;
    }

    if (!transcriptFile) {
      toast.error("Please upload your academic transcript");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log("Form data:", data);
      console.log("CV file:", cvFile.name);
      console.log("Transcript file:", transcriptFile.name);
      
      toast.success("Application submitted successfully! You will receive a confirmation email shortly.");
      form.reset();
      setCvFile(null);
      setTranscriptFile(null);
    } catch (error) {
      toast.error("Failed to submit application. Please try again.");
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const awardCategories = [
    { value: "science-leadership-awandare", label: "Gordon A. Awandare Science Leadership Award" },
    { value: "science-leadership-kwiatkowski", label: "Dominic P. Kwiatkowski Science Leadership Award" },
    { value: "excellence-amenga-etego", label: "Lucas N. Amenga-Etego Excellence Award" },
    { value: "excellence-rockett", label: "Kirk A. Rockett Excellence Award" },
    { value: "excellence-tingbani", label: "Takura Tingbani Excellence Award" },
    { value: "excellence-mensah", label: "David Nabegmado Mensah Excellence Award" },
    { value: "research-small-grant", label: "Small Research Grant" },
    { value: "research-innovation", label: "Innovation Fund Award" },
    { value: "research-travel", label: "Travel & Conference Award" },
  ];

  const academicLevels = [
    { value: "undergraduate", label: "Undergraduate Student" },
    { value: "masters", label: "Master's Student" },
    { value: "phd", label: "PhD Student" },
    { value: "postdoc", label: "Postdoctoral Researcher" },
    { value: "early-career", label: "Early Career Professional" },
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Personal Information */}
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Please provide your basic personal details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john.doe@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number *</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="+1234567890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date of Birth *</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="nationality"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nationality *</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Nigerian" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="countryOfResidence"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country of Residence *</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Ghana" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Academic Information */}
        <Card>
          <CardHeader>
            <CardTitle>Academic Information</CardTitle>
            <CardDescription>Tell us about your academic background</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="currentInstitution"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Institution *</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., University of Ghana" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="fieldOfStudy"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Field of Study *</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Biomedical Sciences" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="currentLevel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Academic Level *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {academicLevels.map((level) => (
                          <SelectItem key={level.value} value={level.value}>
                            {level.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>

        {/* Award Selection */}
        <Card>
          <CardHeader>
            <CardTitle>Award Category</CardTitle>
            <CardDescription>Select the award you're applying for</CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="awardCategory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Award Category *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an award category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {awardCategories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Application Details */}
        <Card>
          <CardHeader>
            <CardTitle>Application Details</CardTitle>
            <CardDescription>Share your research interests, motivation, and achievements</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="researchInterests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Research Interests *</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Describe your research interests and areas of focus (minimum 100 characters)"
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    {field.value.length}/1000 characters
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="motivation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Motivation Statement *</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Why are you applying for this award? What impact do you hope to make? (minimum 200 characters)"
                      className="min-h-[150px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    {field.value.length}/2000 characters
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="achievements"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Academic & Research Achievements *</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="List your key academic achievements, publications, awards, and contributions (minimum 100 characters)"
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    {field.value.length}/1500 characters
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        {/* Document Uploads */}
        <Card>
          <CardHeader>
            <CardTitle>Supporting Documents</CardTitle>
            <CardDescription>Upload your CV and academic transcript (PDF or Word, max 5MB each)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="cv-upload">Curriculum Vitae (CV) *</Label>
              <div className="flex items-center gap-4">
                <Input
                  id="cv-upload"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => handleFileChange(e, 'cv')}
                  className="cursor-pointer"
                />
                {cvFile && (
                  <span className="text-sm text-muted-foreground flex items-center gap-2">
                    <Upload size={16} />
                    {cvFile.name}
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="transcript-upload">Academic Transcript *</Label>
              <div className="flex items-center gap-4">
                <Input
                  id="transcript-upload"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => handleFileChange(e, 'transcript')}
                  className="cursor-pointer"
                />
                {transcriptFile && (
                  <span className="text-sm text-muted-foreground flex items-center gap-2">
                    <Upload size={16} />
                    {transcriptFile.name}
                  </span>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* References */}
        <Card>
          <CardHeader>
            <CardTitle>References</CardTitle>
            <CardDescription>Provide contact details for two academic referees</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">First Referee</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="referee1Name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Dr. Jane Smith" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="referee1Email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="jane.smith@university.edu" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="referee1Institution"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Institution *</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., University of Cape Town" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Second Referee</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="referee2Name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Prof. John Brown" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="referee2Email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john.brown@university.edu" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="referee2Institution"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Institution *</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Makerere University" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button 
            type="submit" 
            size="lg" 
            disabled={isSubmitting}
            className="w-full md:w-auto min-w-[200px]"
          >
            {isSubmitting ? (
              <>
                <div className="mr-2">
                  <LoadingSpinner size="sm" />
                </div>
                Submitting...
              </>
            ) : (
              "Submit Application"
            )}
          </Button>
        </div>
      </form>

      {/* Full-page loading overlay */}
      {isSubmitting && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="text-center">
            <LoadingSpinner size="lg" />
            <p className="mt-4 text-lg text-foreground">Submitting your application...</p>
            <p className="text-sm text-muted-foreground">Please wait</p>
          </div>
        </div>
      )}
    </Form>
  );
};

export default ApplicationForm;
