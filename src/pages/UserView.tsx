import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function UserView() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-32">
      {/* User Ticket Section */}
      <motion.section
        className="text-center space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          User View - Open a Ticket
        </h1>
        <Card>
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold">Open a Ticket</h3>
            <Input placeholder="Title of the ticket" className="mb-4" />
            <Textarea placeholder="Explain what's wrong..." className="mb-4" />
            <Input type="file" className="mb-4" />
            <Button size="lg">Submit Ticket</Button>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  );
}
