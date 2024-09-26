export default interface ProjectProps {
    id: number;
    devices: string[];       // Array of device types (e.g., android, website)
    visibility: string;      // Visibility setting (e.g., read-only)
    createdTime: number;     // Year of creation (e.g., 2024)
    title: string;           // Project title
    language: string[];      // Array of languages/technologies used (e.g., html, css, js)
    imageSource: string;     // Source of the image file (relative or absolute path)
    imageAlt: string;        // Alt text for the image
    description: string;     // Project description
    hrefTarget: string;      // URL or hash for the project link target
}