import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Toast, ToastProvider, ToastViewport, ToastTitle, ToastDescription, ToastClose } from "@/components/ui/toast";
import { Switch } from "@/components/ui/switch";
import { ChartContainer } from "@/components/ui/chart";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function IndexPage() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-32">
      {/* Dashboard Section */}
      <motion.section
        className="text-center space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Ticket Management Dashboard
        </h1>
        <div className="flex justify-center gap-4">
          <Input placeholder="Search tickets..." className="max-w-md" />
          <Button size="lg">Search</Button>
        </div>
        <ChartContainer config={{}}>
          {/* Add chart components here */}
          <div>Chart Content Here</div>
        </ChartContainer>
      </motion.section>

      {/* Ticket Operations Section */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid gap-8 md:grid-cols-3"
      >
        <motion.div variants={fadeInUp}>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold">Open a Ticket</h3>
              <Button size="lg">Open Ticket</Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold">Close a Ticket</h3>
              <Button size="lg">Close Ticket</Button>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold">Reopen a Ticket</h3>
              <Button size="lg">Reopen Ticket</Button>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* Chat System Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="space-y-8"
      >
        <motion.div variants={fadeInUp} className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Live Chat System
          </h2>
          <Textarea placeholder="Type your message..." className="max-w-lg mx-auto" />
          <Button size="lg">Send</Button>
        </motion.div>
      </motion.section>

      {/* User-Centric Design Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-center space-y-6"
      >
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Personalization Options
          </h2>
          <div className="flex justify-center gap-4">
            <Avatar>
              <AvatarImage src="/path/to/avatar.jpg" alt="User Avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Switch />
          </div>
        </motion.div>
      </motion.section>

      {/* Toast Notifications */}
      <ToastProvider>
        <ToastViewport />
        <Toast>
          <ToastTitle>Notification</ToastTitle>
          <ToastDescription>Your ticket has been updated.</ToastDescription>
          <ToastClose />
        </Toast>
      </ToastProvider>
    </div>
  );
}
