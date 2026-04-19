// import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";
// import React from 'react'
// const ModernTemplate = ({ data, accentColor }) => {
// 	const formatDate = (dateStr) => {
// 		if (!dateStr) return "";
// 		const [year, month] = dateStr.split("-");
// 		return new Date(year, month - 1).toLocaleDateString("en-US", {
// 			year: "numeric",
// 			month: "short"
// 		});
// 	};

// 	return (
// 		<div className="max-w-4xl mx-auto bg-white text-gray-800">
// 			{/* Header */}
// 			<header className="p-8 text-white" style={{ backgroundColor: accentColor }}>
// 				<h1 className="text-4xl font-light mb-3">
// 					{data.personal_info?.full_name || "Your Name"}
// 				</h1>

// 				<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm ">
// 					{data.personal_info?.email && (
// 						<div className="flex items-center gap-2">
// 							<Mail className="size-4" />
// 							<span>{data.personal_info.email}</span>
// 						</div>
// 					)}
// 					{data.personal_info?.phone && (
// 						<div className="flex items-center gap-2">
// 							<Phone className="size-4" />
// 							<span>{data.personal_info.phone}</span>
// 						</div>
// 					)}
// 					{data.personal_info?.location && (
// 						<div className="flex items-center gap-2">
// 							<MapPin className="size-4" />
// 							<span>{data.personal_info.location}</span>
// 						</div>
// 					)}
// 					{data.personal_info?.linkedin && (
// 						<a target="_blank" href={data.personal_info?.linkedin} className="flex items-center gap-2">
// 							<Linkedin className="size-4" />
// 							<span className="break-all text-xs">{data.personal_info.linkedin.split("https://www.")[1] ? data.personal_info.linkedin.split("https://www.")[1] : data.personal_info.linkedin}</span>
// 						</a>
// 					)}
// 					{data.personal_info?.website && (
// 						<a target="_blank" href={data.personal_info?.website} className="flex items-center gap-2">
// 							<Globe className="size-4" />
// 							<span className="break-all text-xs">{data.personal_info.website.split("https://")[1] ? data.personal_info.website.split("https://")[1] : data.personal_info.website}</span>
// 						</a>
// 					)}
// 				</div>
// 			</header>

// 			<div className="p-8">
// 				{/* Professional Summary */}
// 				{data.professional_summary && (
// 					<section className="mb-8">
// 						<h2 className="text-2xl font-light mb-4 pb-2 border-b border-gray-200">
// 							Professional Summary
// 						</h2>
// 						<p className="text-gray-700 ">{data.professional_summary}</p>
// 					</section>
// 				)}

// 				{/* Experience */}
// 				{data.experience && data.experience.length > 0 && (
// 					<section className="mb-8">
// 						<h2 className="text-2xl font-light mb-6 pb-2 border-b border-gray-200">
// 							Experience
// 						</h2>

// 						<div className="space-y-6">
// 							{data.experience.map((exp, index) => (
// 								<div key={index} className="relative pl-6 border-l border-gray-200">

// 									<div className="flex justify-between items-start mb-2">
// 										<div>
// 											<h3 className="text-xl font-medium text-gray-900">{exp.position}</h3>
// 											<p className="font-medium" style={{ color: accentColor }}>{exp.company}</p>
// 										</div>
// 										<div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded">
// 											{formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}
// 										</div>
// 									</div>
// 									{exp.description && (
// 										<div className="text-gray-700 leading-relaxed mt-3 whitespace-pre-line">
// 											{exp.description}
// 										</div>
// 									)}
// 								</div>
// 							))}
// 						</div>
// 					</section>
// 				)}

// 				{/* Projects */}
// 				{data.project && data.project.length > 0 && (
// 					<section className="mb-8">
// 						<h2 className="text-2xl font-light mb-4 pb-2 border-b border-gray-200">
// 							Projects
// 						</h2>

// 						<div className="space-y-6">
// 							{data.project.map((p, index) => (
// 								<div key={index} className="relative pl-6 border-l border-gray-200" style={{borderLeftColor: accentColor}}>


// 									<div className="flex justify-between items-start">
// 										<div>
// 											<h3 className="text-lg font-medium text-gray-900">{p.name}</h3>
// 										</div>
// 									</div>
// 									{p.description && (
// 										<div className="text-gray-700 leading-relaxed text-sm mt-3">
// 											{p.description}
// 										</div>
// 									)}
// 								</div>
// 							))}
// 						</div>
// 					</section>
// 				)}

// 				<div className="grid sm:grid-cols-2 gap-8">
// 					{/* Education */}
// 					{data.education && data.education.length > 0 && (
// 						<section>
// 							<h2 className="text-2xl font-light mb-4 pb-2 border-b border-gray-200">
// 								Education
// 							</h2>

// 							<div className="space-y-4">
// 								{data.education.map((edu, index) => (
// 									<div key={index}>
// 										<h3 className="font-semibold text-gray-900">
// 											{edu.degree} {edu.field && `in ${edu.field}`}
// 										</h3>
// 										<p style={{ color: accentColor }}>{edu.institution}</p>
// 										<div className="flex justify-between items-center text-sm text-gray-600">
// 											<span>{formatDate(edu.graduation_date)}</span>
// 											{edu.gpa && <span>GPA: {edu.gpa}</span>}
// 										</div>
// 									</div>
// 								))}
// 							</div>
// 						</section>
// 					)}

// 					{/* Skills */}
// 					{data.skills && data.skills.length > 0 && (
// 						<section>
// 							<h2 className="text-2xl font-light mb-4 pb-2 border-b border-gray-200">
// 								Skills
// 							</h2>

// 							<div className="flex flex-wrap gap-2">
// 								{data.skills.map((skill, index) => (
// 									<span
// 										key={index}
// 										className="px-3 py-1 text-sm text-white rounded-full"
// 										style={{ backgroundColor: accentColor }}
// 									>
// 										{skill}
// 									</span>
// 								))}
// 							</div>
// 						</section>
// 					)}
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default ModernTemplate;



// import React from 'react'

// const ModernTemplate = ({ data, accentColor }) => {
//     const formatDate = (dateStr) => {
//         if (!dateStr) return "";
//         const [year, month] = dateStr.split("-");
//         return new Date(year, month - 1).toLocaleDateString("en-US", {
//             year: "numeric",
//             month: "short"
//         });
//     };

//     return (
//         <div className="max-w-4xl mx-auto bg-white text-gray-800">
//             {/* Header */}
//             <header className="p-8 text-white" style={{ backgroundColor: accentColor || "#3B82F6" }}>
//                 <h1 className="text-4xl font-light mb-2">
//                     {data?.personal_info?.full_name || "Your Name"}
//                 </h1>
                
//                 {/* Profession */}
//                 {data?.personal_info?.profession && (
//                     <p className="text-lg font-light mb-4 opacity-90">
//                         {data.personal_info.profession}
//                     </p>
//                 )}
                
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
//                     {data?.personal_info?.email && (
//                         <div className="flex items-center gap-2">
//                             <span>📧</span>
//                             <span>{data.personal_info.email}</span>
//                         </div>
//                     )}
//                     {data?.personal_info?.phone && (
//                         <div className="flex items-center gap-2">
//                             <span>📞</span>
//                             <span>{data.personal_info.phone}</span>
//                         </div>
//                     )}
//                     {data?.personal_info?.location && (
//                         <div className="flex items-center gap-2">
//                             <span>📍</span>
//                             <span>{data.personal_info.location}</span>
//                         </div>
//                     )}
                    
//                     {/* LinkedIn */}
//                     {data?.personal_info?.linkedin && (
//                         <a 
//                             href={data.personal_info.linkedin} 
//                             target="_blank" 
//                             rel="noopener noreferrer" 
//                             className="flex items-center gap-2 hover:opacity-80"
//                         >
//                             <span>🔗</span>
//                             <span className="text-xs break-all">
//                                 {data.personal_info.linkedin.replace("https://", "").replace("www.", "")}
//                             </span>
//                         </a>
//                     )}
                    
//                     {/* Website */}
//                     {data?.personal_info?.website && (
//                         <a 
//                             href={data.personal_info.website} 
//                             target="_blank" 
//                             rel="noopener noreferrer" 
//                             className="flex items-center gap-2 hover:opacity-80"
//                         >
//                             <span>🌐</span>
//                             <span className="text-xs break-all">
//                                 {data.personal_info.website.replace("https://", "").replace("www.", "")}
//                             </span>
//                         </a>
//                     )}
//                 </div>
//             </header>

//             <div className="p-8">
//                 {/* Professional Summary */}
//                 {data?.professional_summary && (
//                     <section className="mb-8">
//                         <h2 className="text-2xl font-light mb-4 pb-2 border-b border-gray-200">
//                             Professional Summary
//                         </h2>
//                         <p className="text-gray-700 leading-relaxed">{data.professional_summary}</p>
//                     </section>
//                 )}

//                 {/* Experience */}
//                 {data?.experience && data.experience.length > 0 && (
//                     <section className="mb-8">
//                         <h2 className="text-2xl font-light mb-6 pb-2 border-b border-gray-200">
//                             Experience
//                         </h2>
//                         <div className="space-y-6">
//                             {data.experience.map((exp, index) => (
//                                 <div key={index} className="relative pl-6 border-l border-gray-200">
//                                     <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
//                                         <div>
//                                             <h3 className="text-xl font-medium text-gray-900">{exp.position}</h3>
//                                             <p className="font-medium" style={{ color: accentColor || "#3B82F6" }}>{exp.company}</p>
//                                         </div>
//                                         <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded">
//                                             {formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}
//                                         </div>
//                                     </div>
//                                     {exp.description && (
//                                         <div className="text-gray-700 leading-relaxed mt-3 whitespace-pre-line">
//                                             {exp.description}
//                                         </div>
//                                     )}
//                                 </div>
//                             ))}
//                         </div>
//                     </section>
//                 )}

//                 {/* Projects */}
//                 {data?.project && data.project.length > 0 && (
//                     <section className="mb-8">
//                         <h2 className="text-2xl font-light mb-4 pb-2 border-b border-gray-200">
//                             Projects
//                         </h2>
//                         <div className="space-y-4">
//                             {data.project.map((project, index) => (
//                                 <div key={index} className="pl-4 border-l-2" style={{ borderLeftColor: accentColor || "#3B82F6" }}>
//                                     <h3 className="text-lg font-medium text-gray-900">{project.name}</h3>
//                                     {project.type && (
//                                         <p className="text-sm" style={{ color: accentColor || "#3B82F6" }}>{project.type}</p>
//                                     )}
//                                     {project.description && (
//                                         <p className="text-gray-600 mt-1">{project.description}</p>
//                                     )}
//                                 </div>
//                             ))}
//                         </div>
//                     </section>
//                 )}

//                 <div className="grid sm:grid-cols-2 gap-8">
//                     {/* Education */}
//                     {data?.education && data.education.length > 0 && (
//                         <section>
//                             <h2 className="text-2xl font-light mb-4 pb-2 border-b border-gray-200">
//                                 Education
//                             </h2>
//                             <div className="space-y-4">
//                                 {data.education.map((edu, index) => (
//                                     <div key={index}>
//                                         <h3 className="font-semibold text-gray-900">
//                                             {edu.degree} {edu.field && `in ${edu.field}`}
//                                         </h3>
//                                         <p style={{ color: accentColor || "#3B82F6" }}>{edu.institution}</p>
//                                         <div className="flex justify-between items-center text-sm text-gray-600 mt-1">
//                                             <span>{formatDate(edu.graduation_date)}</span>
//                                             {edu.gpa && <span>GPA: {edu.gpa}</span>}
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </section>
//                     )}

//                     {/* Skills */}
//                     {data?.skills && data.skills.length > 0 && (
//                         <section>
//                             <h2 className="text-2xl font-light mb-4 pb-2 border-b border-gray-200">
//                                 Skills
//                             </h2>
//                             <div className="flex flex-wrap gap-2">
//                                 {data.skills.map((skill, index) => (
//                                     <span
//                                         key={index}
//                                         className="px-3 py-1 text-sm text-white rounded-full"
//                                         style={{ backgroundColor: accentColor || "#3B82F6" }}
//                                     >
//                                         {skill}
//                                     </span>
//                                 ))}
//                             </div>
//                         </section>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ModernTemplate


// import { Mail, Phone, MapPin } from "lucide-react";
// import React from 'react'

// const ModernTemplate = ({ data, accentColor }) => {
//     const formatDate = (dateStr) => {
//         if (!dateStr) return "";
//         const [year, month] = dateStr.split("-");
//         return new Date(year, month - 1).toLocaleDateString("en-US", {
//             year: "numeric",
//             month: "short"
//         });
//     };

//     return (
//         <div className="max-w-4xl mx-auto bg-white text-gray-800">
//             {/* Header */}
//             <header className="p-8 text-white" style={{ backgroundColor: accentColor || "#3B82F6" }}>
//                 <h1 className="text-4xl font-light mb-2">
//                     {data?.personal_info?.full_name || "Your Name"}
//                 </h1>
                
//                 {/* Profession */}
//                 {data?.personal_info?.profession && (
//                     <p className="text-lg font-light mb-4 opacity-90">
//                         {data.personal_info.profession}
//                     </p>
//                 )}
                
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
//                     {data?.personal_info?.email && (
//                         <div className="flex items-center gap-2">
//                             <Mail size={14} style={{ color: "white" }} />
//                             <span>{data.personal_info.email}</span>
//                         </div>
//                     )}
//                     {data?.personal_info?.phone && (
//                         <div className="flex items-center gap-2">
//                             <Phone size={14} style={{ color: "white" }} />
//                             <span>{data.personal_info.phone}</span>
//                         </div>
//                     )}
//                     {data?.personal_info?.location && (
//                         <div className="flex items-center gap-2">
//                             <MapPin size={14} style={{ color: "white" }} />
//                             <span>{data.personal_info.location}</span>
//                         </div>
//                     )}
                    
//                     {/* LinkedIn - emoji */}
//                     {data?.personal_info?.linkedin && (
//                         <a 
//                             href={data.personal_info.linkedin} 
//                             target="_blank" 
//                             rel="noopener noreferrer" 
//                             className="flex items-center gap-2 hover:opacity-80"
//                         >
//                             <span>🔗</span>
//                             <span className="text-xs break-all">
//                                 {data.personal_info.linkedin.replace("https://", "").replace("www.", "")}
//                             </span>
//                         </a>
//                     )}


                    
//                     {/* Website - emoji */}
//                     {data?.personal_info?.website && (
//                         <a 
//                             href={data.personal_info.website} 
//                             target="_blank" 
//                             rel="noopener noreferrer" 
//                             className="flex items-center gap-2 hover:opacity-80"
//                         >
//                             <span>🌐</span>
//                             <span className="text-xs break-all">
//                                 {data.personal_info.website.replace("https://", "").replace("www.", "")}
//                             </span>
//                         </a>
//                     )}
//                 </div>
//             </header>

//             <div className="p-8">
//                 {/* Professional Summary */}
//                 {data?.professional_summary && (
//                     <section className="mb-8">
//                         <h2 className="text-2xl font-light mb-4 pb-2 border-b border-gray-200">
//                             Professional Summary
//                         </h2>
//                         <p className="text-gray-700 leading-relaxed">{data.professional_summary}</p>
//                     </section>
//                 )}

//                 {/* Experience */}
//                 {data?.experience && data.experience.length > 0 && (
//                     <section className="mb-8">
//                         <h2 className="text-2xl font-light mb-6 pb-2 border-b border-gray-200">
//                             Experience
//                         </h2>
//                         <div className="space-y-6">
//                             {data.experience.map((exp, index) => (
//                                 <div key={index} className="relative pl-6 border-l border-gray-200">
//                                     <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
//                                         <div>
//                                             <h3 className="text-xl font-medium text-gray-900">{exp.position}</h3>
//                                             <p className="font-medium" style={{ color: accentColor || "#3B82F6" }}>{exp.company}</p>
//                                         </div>
//                                         <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded">
//                                             {formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}
//                                         </div>
//                                     </div>
//                                     {exp.description && (
//                                         <div className="text-gray-700 leading-relaxed mt-3 whitespace-pre-line">
//                                             {exp.description}
//                                         </div>
//                                     )}
//                                 </div>
//                             ))}
//                         </div>
//                     </section>
//                 )}

//                 {/* Projects */}
//                 {data?.project && data.project.length > 0 && (
//                     <section className="mb-8">
//                         <h2 className="text-2xl font-light mb-4 pb-2 border-b border-gray-200">
//                             Projects
//                         </h2>
//                         <div className="space-y-4">
//                             {data.project.map((project, index) => (
//                                 <div key={index} className="pl-4 border-l-2" style={{ borderLeftColor: accentColor || "#3B82F6" }}>
//                                     <h3 className="text-lg font-medium text-gray-900">{project.name}</h3>
//                                     {project.type && (
//                                         <p className="text-sm" style={{ color: accentColor || "#3B82F6" }}>{project.type}</p>
//                                     )}
//                                     {project.description && (
//                                         <p className="text-gray-600 mt-1">{project.description}</p>
//                                     )}
//                                 </div>
//                             ))}
//                         </div>
//                     </section>
//                 )}

//                 <div className="grid sm:grid-cols-2 gap-8">
//                     {/* Education */}
//                     {data?.education && data.education.length > 0 && (
//                         <section>
//                             <h2 className="text-2xl font-light mb-4 pb-2 border-b border-gray-200">
//                                 Education
//                             </h2>
//                             <div className="space-y-4">
//                                 {data.education.map((edu, index) => (
//                                     <div key={index}>
//                                         <h3 className="font-semibold text-gray-900">
//                                             {edu.degree} {edu.field && `in ${edu.field}`}
//                                         </h3>
//                                         <p style={{ color: accentColor || "#3B82F6" }}>{edu.institution}</p>
//                                         <div className="flex justify-between items-center text-sm text-gray-600 mt-1">
//                                             <span>{formatDate(edu.graduation_date)}</span>
//                                             {edu.gpa && <span>GPA: {edu.gpa}</span>}
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </section>
//                     )}

//                     {/* Skills */}
//                     {data?.skills && data.skills.length > 0 && (
//                         <section>
//                             <h2 className="text-2xl font-light mb-4 pb-2 border-b border-gray-200">
//                                 Skills
//                             </h2>
//                             <div className="flex flex-wrap gap-2">
//                                 {data.skills.map((skill, index) => (
//                                     <span
//                                         key={index}
//                                         className="px-3 py-1 text-sm text-white rounded-full"
//                                         style={{ backgroundColor: accentColor || "#3B82F6" }}
//                                     >
//                                         {skill}
//                                     </span>
//                                 ))}
//                             </div>
//                         </section>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ModernTemplate






import { Mail, Phone, MapPin, Link, Globe } from "lucide-react";

const ModernTemplate = ({ data, accentColor }) => {
	const formatDate = (dateStr) => {
		if (!dateStr) return "";
		const [year, month] = dateStr.split("-");
		return new Date(year, month - 1).toLocaleDateString("en-US", {
			year: "numeric",
			month: "short"
		});
	};

	return (
		<div className="max-w-4xl mx-auto bg-white text-gray-800">
			{/* Header */}
			<header className="p-8 text-white" style={{ backgroundColor: accentColor }}>
				<h1 className="text-4xl font-light mb-3">
					{data.personal_info?.full_name || "Your Name"}
				</h1>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm ">
					{data.personal_info?.email && (
						<div className="flex items-center gap-2">
							<Mail className="size-4" />
							<span>{data.personal_info.email}</span>
						</div>
					)}
					{data.personal_info?.phone && (
						<div className="flex items-center gap-2">
							<Phone className="size-4" />
							<span>{data.personal_info.phone}</span>
						</div>
					)}
					{data.personal_info?.location && (
						<div className="flex items-center gap-2">
							<MapPin className="size-4" />
							<span>{data.personal_info.location}</span>
						</div>
					)}

					{/* LinkedIn - emoji */}
                    {/* {data?.personal_info?.linkedin && (
                        <a 
                            href={data.personal_info.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-2 hover:opacity-80"
                        >
                            <span>🔗</span>
                            <span className="text-xs break-all">
                                {data.personal_info.linkedin.replace("https://", "").replace("www.", "")}
                            </span>
                        </a>
                    )} */}

					{data.personal_info?.linkedin && (
						<a target="_blank" href={data.personal_info?.linkedin} className="flex items-center gap-2">
							<Link className="size-4" />
							<span className="break-all text-xs">{data.personal_info.linkedin.split("https://www.")[1] ? data.personal_info.linkedin.split("https://www.")[1] : data.personal_info.linkedin}</span>
						</a>
					)}


                    
                    {/* Website -emoji */}
                    {/* {data?.personal_info?.website && (
                        <a 
                            href={data.personal_info.website} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-2 hover:opacity-80"
                        >
                            <span>🌐</span>
                            <span className="text-xs break-all">
                                {data.personal_info.website.replace("https://", "").replace("www.", "")}
                            </span>
                        </a>
                    )} */}

					{data.personal_info?.website && (
						<a target="_blank" href={data.personal_info?.website} className="flex items-center gap-2">
							<Globe className="size-4" />
							<span className="break-all text-xs">{data.personal_info.website.split("https://")[1] ? data.personal_info.website.split("https://")[1] : data.personal_info.website}</span>
						</a>
					)}

				</div>
			</header>

			<div className="p-8">
				{/* Professional Summary */}
				{data.professional_summary && (
					<section className="mb-8">
						<h2 className="text-2xl font-light mb-4 pb-2 border-b border-gray-200">
							Professional Summary
						</h2>
						<p className="text-gray-700 ">{data.professional_summary}</p>
					</section>
				)}

				{/* Experience */}
				{data.experience && data.experience.length > 0 && (
					<section className="mb-8">
						<h2 className="text-2xl font-light mb-6 pb-2 border-b border-gray-200">
							Experience
						</h2>

						<div className="space-y-6">
							{data.experience.map((exp, index) => (
								<div key={index} className="relative pl-6 border-l border-gray-200">

									<div className="flex justify-between items-start mb-2">
										<div>
											<h3 className="text-xl font-medium text-gray-900">{exp.position}</h3>
											<p className="font-medium" style={{ color: accentColor }}>{exp.company}</p>
										</div>
										<div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded">
											{formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}
										</div>
									</div>
									{exp.description && (
										<div className="text-gray-700 leading-relaxed mt-3 whitespace-pre-line">
											{exp.description}
										</div>
									)}
								</div>
							))}
						</div>
					</section>
				)}

				{/* Projects */}
				{data.project && data.project.length > 0 && (
					<section className="mb-8">
						<h2 className="text-2xl font-light mb-4 pb-2 border-b border-gray-200">
							Projects
						</h2>

						<div className="space-y-6">
							{data.project.map((p, index) => (
								<div key={index} className="relative pl-6 border-l border-gray-200" style={{borderLeftColor: accentColor}}>


									<div className="flex justify-between items-start">
										<div>
											<h3 className="text-lg font-medium text-gray-900">{p.name}</h3>
										</div>
									</div>
									{p.description && (
										<div className="text-gray-700 leading-relaxed text-sm mt-3">
											{p.description}
										</div>
									)}
								</div>
							))}
						</div>
					</section>
				)}

				<div className="grid sm:grid-cols-2 gap-8">
					{/* Education */}
					{data.education && data.education.length > 0 && (
						<section>
							<h2 className="text-2xl font-light mb-4 pb-2 border-b border-gray-200">
								Education
							</h2>

							<div className="space-y-4">
								{data.education.map((edu, index) => (
									<div key={index}>
										<h3 className="font-semibold text-gray-900">
											{edu.degree} {edu.field && `in ${edu.field}`}
										</h3>
										<p style={{ color: accentColor }}>{edu.institution}</p>
										<div className="flex justify-between items-center text-sm text-gray-600">
											<span>{formatDate(edu.graduation_date)}</span>
											{edu.gpa && <span>GPA: {edu.gpa}</span>}
										</div>
									</div>
								))}
							</div>
						</section>
					)}

					{/* Skills */}
					{data.skills && data.skills.length > 0 && (
						<section>
							<h2 className="text-2xl font-light mb-4 pb-2 border-b border-gray-200">
								Skills
							</h2>

							<div className="flex flex-wrap gap-2">
								{data.skills.map((skill, index) => (
									<span
										key={index}
										className="px-3 py-1 text-sm text-white rounded-full"
										style={{ backgroundColor: accentColor }}
									>
										{skill}
									</span>
								))}
							</div>
						</section>
					)}
				</div>
			</div>
		</div>
	);
}

export default ModernTemplate;