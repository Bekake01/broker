<template>
  <section class="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="faq-heading">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header class="text-center mb-16">
        <h2 id="faq-heading" class="text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p class="text-lg text-gray-600">
          Get answers to common questions about our fast and reliable auto transport services
        </p>
      </header>
      <div class="max-w-4xl mx-auto">
        <UAccordion 
          :items="questions" 
          type="single"
          :ui="{
            item: 'bg-white border border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all duration-200 mb-4',
            trigger: 'group flex-1 flex items-center gap-3 font-semibold text-base py-5 px-6 focus-visible:outline-primary min-w-0',
            body: 'text-base text-gray-700 leading-relaxed pb-6 px-6',
            leadingIcon: 'shrink-0 size-6 text-blue-600',
            trailingIcon: 'shrink-0 size-6 ms-auto text-gray-400 group-data-[state=open]:rotate-180 group-data-[state=open]:text-blue-600 transition-all duration-200',
            label: 'text-start break-words text-gray-900'
          }" 
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const questions = ref([
  {
    icon: 'i-lucide-circle-help',
    label: "How quickly can First Line Transport pick up my vehicle?",
    content: "At First Line Transport, our goal is to be fast and reliable. Once you provide your pick-up and delivery details, we aim to schedule your vehicle pick-up as soon as possible — often within 24-72 hours depending on your location and carrier availability. We'll keep you updated throughout to ensure a seamless process.",
  },
  {
    icon: 'i-lucide-circle-help',
    label: "What makes First Line Transport a reliable choice for car transportation?",
    content: "Reliability is at the core of First Line Transport's service. We work only with fully vetted carriers, provide transparent tracking and updates, and ensure your vehicle is handled with care from door to door. We pride ourselves on delivering your vehicle on time and in the condition you expect.",
  },
  {
    icon: 'i-lucide-circle-help',
    label: "How do you calculate the cost of transporting my car?",
    content: "The cost with First Line Transport is based on several factors — distance, vehicle size/type, transport method (open vs enclosed), pick-up and drop-off locations, and preferred schedule. Because we're committed to fast and reliable service, we provide a detailed quote without hidden fees so you can plan with confidence.",
  },
  {
    icon: 'i-lucide-circle-help',
    label: "What transport methods does First Line Transport offer?",
    content: "First Line Transport offers both open-carrier and enclosed-carrier transport options. Open trailers are cost-effective and widely used; enclosed carriers provide extra protection for high-value or classic vehicles. In both cases, you'll get the dependable, on-time service you expect from us.",
  },
  {
    icon: 'i-lucide-circle-help',
    label: "Do I need to be present when my vehicle is picked up or delivered?",
    content: "Yes — for the sake of transparency and to ensure a reliable hand-off, First Line Transport requires that you or a trusted representative (18+) be present at both pick-up and delivery. This allows a joint inspection, vehicle condition check, and signing of the bill of lading.",
  },
  {
    icon: 'i-lucide-circle-help',
    label: "How long will it take to transport my vehicle?",
    content: "Transit times vary depending on distance and route. As a broad guideline, shorter hauls can be completed in a few days, longer cross-country transports may take a week or more. Because First Line Transport emphasizes speed and dependability, we'll give you an estimated delivery window and keep you informed every step of the way.",
  },
  {
    icon: 'i-lucide-circle-help',
    label: "Is my vehicle insured during transit with First Line Transport?",
    content: "Absolutely. Your vehicle is covered under carrier cargo insurance from the moment it's loaded until delivery. At First Line Transport, we take every step to ensure you receive a fast, reliable service with full peace of mind regarding protection.",
  },
  {
    icon: 'i-lucide-circle-help',
    label: "Can I ship personal items in my car when using First Line Transport?",
    content: "While you may wish to, First Line Transport advises against placing personal belongings in the vehicle during transport. Extra weight or unsecured items can affect safety, insurance coverage, and scheduling reliability. We'll share our best practices for preparing your vehicle to help ensure a smooth, fast journey.",
  },
  {
    icon: 'i-lucide-circle-help',
    label: "How do I get a quote and book my vehicle transport with First Line Transport?",
    content: "Getting started is easy: just contact First Line Transport with your pick-up and drop-off locations, vehicle make/model, and preferred dates. We'll provide a fast quote and, once booked, assign a reliable carrier to handle your shipment, keeping you informed from start to finish.",
  },
  {
    icon: 'i-lucide-circle-help',
    label: "What happens if there's a delay in delivery with First Line Transport?",
    content: "At First Line Transport, our aim is to deliver on time — reliably. But if unexpected events like weather, road closures or mechanical issues arise, we'll notify you promptly with updated timing and work proactively to minimize any disruption. You'll always know where your vehicle is and when it will arrive.",
  }
])
</script>
