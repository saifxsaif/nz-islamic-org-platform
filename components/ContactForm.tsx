"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/validation";
import { Button } from "./Button";
import { AlertCircle, CheckCircle } from "lucide-react";

interface ContactFormProps {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export function ContactForm({ onSuccess, onError }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      honeypot: "",
    },
  });

  const honeypot = watch("honeypot");

  const onSubmit = async (data: ContactFormData) => {
    // Honeypot check
    if (honeypot) {
      console.warn("Honeypot field filled - likely spam");
      setSubmitStatus({
        type: "success",
        message: "Thank you for your message. We will respond soon.",
      });
      reset();
      onSuccess?.();
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setSubmitStatus({
        type: "success",
        message: "Thank you for your message. We will respond soon.",
      });
      reset();
      onSuccess?.();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An error occurred";
      setSubmitStatus({
        type: "error",
        message: errorMessage,
      });
      onError?.(error instanceof Error ? error : new Error(errorMessage));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl">
      {/* Honeypot field - hidden from users */}
      <input
        type="text"
        {...register("honeypot")}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {/* Status Messages */}
      {submitStatus.type === "success" && (
        <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
          <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
          <p className="text-green-800">{submitStatus.message}</p>
        </div>
      )}

      {submitStatus.type === "error" && (
        <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
          <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
          <p className="text-red-800">{submitStatus.message}</p>
        </div>
      )}

      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Name <span className="text-red-600">*</span>
        </label>
        <input
          id="name"
          type="text"
          placeholder="Your full name"
          {...register("name")}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email <span className="text-red-600">*</span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="your.email@example.com"
          {...register("email")}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
      </div>

      {/* Subject Field */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
          Subject <span className="text-red-600">*</span>
        </label>
        <input
          id="subject"
          type="text"
          placeholder="What is this about?"
          {...register("subject")}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 ${
            errors.subject ? "border-red-500" : "border-gray-300"
          }`}
          aria-invalid={errors.subject ? "true" : "false"}
        />
        {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          placeholder="Your message here..."
          rows={6}
          {...register("message")}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 resize-none ${
            errors.message ? "border-red-500" : "border-gray-300"
          }`}
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
      </div>

      {/* Submit Button */}
      <Button type="submit" isLoading={isSubmitting} className="w-full">
        Send Message
      </Button>

      <p className="text-sm text-gray-500">
        <span className="text-red-600">*</span> Required fields
      </p>
    </form>
  );
}
