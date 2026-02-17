export interface CaseStudy {
    slug: string;
    title: string;
    description: string;
    client: string;
    industry: string;
    challenge: string;
    solution: string;
    results: string[];
    testimonial: {
        quote: string;
        author: string;
        role: string;
    };
    images: {
        before: string;
        after: string;
    };
}

export const CASE_STUDIES: CaseStudy[] = [
    {
        slug: "empowered-coaching",
        title: "Scaling a Coaching Business with Strategic Delegation",
        description: "How Sarah reclaimed 20 hours a week and doubled her enrollment with a dedicated Virtual Assistant and a high-converting landing page.",
        client: "Empowered Coaching",
        industry: "Coaching & Consulting",
        challenge: "Sarah, a successful life coach, was drowning in administrative tasks. She spent over 20 hours a week managing emails, scheduling appointments, and manually onboarding new clients. Her website was outdated and didn't reflect her premium service, leading to lost leads.",
        solution: "We deployed a dedicated Executive Assistant to take over inbox management and scheduling. simultaneously, we redesigned her landing page to better communicate her value proposition and streamline the booking process.",
        results: [
            "200% Increase in monthly enrollment",
            "15+ Hours saved per week on admin tasks",
            "Zero missed inquiries due to 24/7 coverage",
        ],
        testimonial: {
            quote: "I can finally breathe again. I didn't realize how much the admin work was holding me back until I let it go. My new landing page is converting cold traffic like crazy, and my VA handles the rest.",
            author: "Sarah Jenkins",
            role: "Founder, Empowered Coaching",
        },
        images: {
            // Using placeholder images for now. In a real scenario, these would be local assets or hosted URLs.
            before: "https://res.cloudinary.com/drpxke63n/image/upload/v1771330381/subscribepage.io_f5A0dZ__oa50ps.png", // A generic "messy" or "plain" web abstract
            after: "https://res.cloudinary.com/drpxke63n/image/upload/v1771330416/www.genxauthoritymentor.com__g9jrst.png",  // A modern "clean" dashboard/web abstract
        },
    },
];
