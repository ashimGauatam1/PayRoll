import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Calendar, DollarSign } from 'lucide-react'
import Salaryinfo from "../components/EmpDashboard/Salaryinfo"
import Leave from "../components/EmpDashboard/Leave"
import EmpDetails from "../components/EmpDashboard/EmpDetails"

const EmployeeDashboard = () => {
  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6 text-teal-700 text-center sm:text-left">Employee Dashboard</h1>
      <Tabs defaultValue="details" className="space-y-4">
        <TabsList className="bg-teal-100 rounded-t-lg flex justify-around sm:justify-start">
          <TabsTrigger value="details" className="data-[state=active]:bg-teal-200 flex items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-300">
            <User className="w-5 h-5 text-teal-600" />
            <span className="hidden sm:inline">Employee Details</span>
          </TabsTrigger>
          <TabsTrigger value="leave" className="data-[state=active]:bg-teal-200 flex items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-300">
            <Calendar className="w-5 h-5 text-teal-600" />
            <span className="hidden sm:inline">Leave Applications</span>
          </TabsTrigger>
          <TabsTrigger value="salary" className="data-[state=active]:bg-teal-200 flex items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-300">
            <DollarSign className="w-5 h-5 text-teal-600" />
            <span className="hidden sm:inline">Salary Information</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="details">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-teal-700">Employee Details</CardTitle>
              <CardDescription>View and manage your personal information</CardDescription>
            </CardHeader>
            <CardContent>
              <EmpDetails />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="leave">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-teal-700">Leave Applications</CardTitle>
              <CardDescription>Manage your leave requests and submit new applications</CardDescription>
            </CardHeader>
            <CardContent>
              <Leave />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="salary">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-teal-700">Salary Information</CardTitle>
              <CardDescription>View your salary details and payment history</CardDescription>
            </CardHeader>
            <CardContent>
              <Salaryinfo />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default EmployeeDashboard