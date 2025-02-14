"use client"

import { api } from "@/convex/_generated/api";
import { useQuery, useMutation } from "convex/react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow 
} from "@/components/ui/table";

/**
 * CRM Dashboard page with contact management functionality
 */
export default function Dashboard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const createContact = useMutation(api.contacts.create);
  const contacts = useQuery(api.contacts.search, { searchTerm }) ?? [];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createContact({ name, email, phoneNumber });
    setName("");
    setEmail("");
    setPhoneNumber("");
  };

  return (
    <div className="h-full p-4 w-full max-w-6xl mx-auto space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Contact Management</h2>
        
        {/* Search Bar */}
        <div className="w-full">
          <Input
            type="text"
            placeholder="Search contacts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
        </div>

        {/* Add Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-lg bg-card">
          <h3 className="text-lg font-medium">Add New Contact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <Button type="submit">Add Contact</Button>
        </form>

        {/* Contacts Table */}
        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone Number</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contacts.map((contact) => (
                <TableRow key={contact._id}>
                  <TableCell>{contact.name}</TableCell>
                  <TableCell>{contact.email}</TableCell>
                  <TableCell>{contact.phoneNumber}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
