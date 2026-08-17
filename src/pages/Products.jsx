// import {
//   FaLeaf,
//   FaSeedling,
//   FaPhoneAlt,
//   FaWhatsapp,
// } from "react-icons/fa";

// const Products = () => {


//   const utilityProducts = [
//     {
//       name: "🌱 केंचुआ खाद",
//       detail: "उच्च गुणवत्ता वाली जैविक खाद",
//       description:
//         "प्राकृतिक एवं वैज्ञानिक विधि से तैयार की गई खाद जो मिट्टी की उर्वरता बढ़ाने, पौधों की जड़ों को मजबूत बनाने और उत्पादन बढ़ाने में सहायक है।",
//     },

//     {
//       name: "🌿 जैविक खाद",
//       detail: "गोबर एवं प्राकृतिक पदार्थों से निर्मित",
//       description:
//         "मिट्टी की गुणवत्ता सुधारने, सूक्ष्म जीवों की सक्रियता बढ़ाने तथा पौधों को आवश्यक पोषण प्रदान करने में सहायक।",
//     },

//     {
//       name: "🪴 जैविक गमले",
//       detail: "पर्यावरण-अनुकूल गमले",
//       description:
//         "प्राकृतिक जैविक तत्वों से निर्मित विशेष गमले जो पौधों के बेहतर विकास और अतिरिक्त पोषण में सहायक हैं।",
//     },

//     {
//       name: "🔥 गोबर कंडे",
//       detail: "पूजन एवं घरेलू उपयोग हेतु",
//       description:
//         "यज्ञ, हवन, धार्मिक अनुष्ठानों एवं प्राकृतिक ईंधन के रूप में उपयोग होने वाला शुद्ध एवं पर्यावरण-अनुकूल उत्पाद।",
//     },

//     {
//       name: "🦟 मच्छर कंडे",
//       detail: "प्राकृतिक मच्छर प्रतिरोधक",
//       description:
//         "गोबर एवं औषधीय तत्वों से निर्मित, जो मच्छरों और अन्य कीटों को प्राकृतिक रूप से दूर रखने में सहायक है।",
//     },
//   ];

//   return (
//     <div className="bg-(--surface-soft) min-h-screen">

//       {/* Hero Section */}

//       <section className="bg-(--primary) text-white py-20">
//         <div className="max-w-7xl mx-auto px-6 text-center">

//           <h1 className="text-5xl font-bold mb-6">
//             गौ सेवा से प्राप्त शुद्ध एवं प्राकृतिक उत्पाद
//           </h1>

//           <p className="max-w-3xl mx-auto text-lg">
//             गौशाला तेंदूखेड़ा द्वारा निर्मित जैविक एवं
//             प्राकृतिक उत्पाद आपके स्वास्थ्य, पर्यावरण
//             और गौ संरक्षण के प्रति हमारी प्रतिबद्धता हैं।
//           </p>

//         </div>
//       </section>
//       {/* Utility Products */}

//       <section className="py-20 bg-(--surface)">
//         <div className="max-w-7xl mx-auto px-6">

//           <h2 className="text-4xl font-bold text-center text-(--primary) mb-4">
//             गौशाला उपयोगी उत्पाद
//           </h2>

//           <p className="text-center text-(--muted) max-w-4xl mx-auto mb-12">
//             गौशाला तेंदूखेड़ा द्वारा निर्मित प्राकृतिक एवं जैविक उत्पाद,
//             जो पर्यावरण संरक्षण, जैविक खेती और गौसेवा को बढ़ावा देते हैं।
//           </p>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

//             {utilityProducts.map((item, index) => (
//               <div
//                 key={index}
//                 className="surface-card rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition duration-300"
//               >
//                 <FaSeedling className="text-5xl text-(--primary) mb-5" />

//                 <h3 className="text-2xl font-bold text-(--primary) mb-3">
//                   {item.name}
//                 </h3>

//                 <p className="font-semibold text-[#FF9933] mb-4">
//                   {item.detail}
//                 </p>

//                 <p className="text-(--muted) leading-relaxed">
//                   {item.description}
//                 </p>
//               </div>
//             ))}

//           </div>

//         </div>
//       </section>

//       {/* Why Buy From Us */}

//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-6">

//           <h2 className="text-4xl font-bold text-center text-(--primary) mb-12">
//             हमसे क्यों खरीदें?
//           </h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

//             <div className="surface-card p-8 rounded-3xl text-center">
//               <FaLeaf className="mx-auto text-4xl text-(--primary) mb-4" />
//               <h3 className="font-bold text-xl mb-3">
//                 प्राकृतिक
//               </h3>
//               <p>
//                 रसायन मुक्त एवं सुरक्षित उत्पाद
//               </p>
//             </div>

//             <div className="surface-card p-8 rounded-3xl text-center">
//               <FaLeaf className="mx-auto text-4xl text-(--primary) mb-4" />
//               <h3 className="font-bold text-xl mb-3">
//                 गौ सेवा
//               </h3>
//               <p>
//                 प्रत्येक खरीद गौ सेवा में सहयोग
//               </p>
//             </div>

//             <div className="surface-card p-8 rounded-3xl text-center">
//               <FaLeaf className="mx-auto text-4xl text-(--primary) mb-4" />
//               <h3 className="font-bold text-xl mb-3">
//                 जैविक
//               </h3>
//               <p>
//                 पर्यावरण अनुकूल उत्पाद
//               </p>
//             </div>

//             <div className="surface-card p-8 rounded-3xl text-center">
//               <FaLeaf className="mx-auto text-4xl text-(--primary) mb-4" />
//               <h3 className="font-bold text-xl mb-3">
//                 स्थानीय
//               </h3>
//               <p>
//                 स्थानीय उत्पादन एवं रोजगार
//               </p>
//             </div>

//           </div>

//         </div>
//       </section>

//       {/* Contact Section */}

//       <section className="py-20 bg-(--primary) text-white">
//         <div className="max-w-4xl mx-auto px-6 text-center">

//           <h2 className="text-4xl font-bold mb-6">
//             ऑर्डर एवं जानकारी हेतु संपर्क करें
//           </h2>

//           <h3 className="text-2xl font-semibold mb-4">
//             संजय कुमार जैन पारस्मणी
//           </h3>

//           <p className="mb-8">
//             अध्यक्ष, गौशाला तेंदूखेड़ा
//           </p>

//           <div className="flex flex-wrap justify-center gap-4">

//             <a
//               href="tel:9589807047"
//               className="bg-white text-[#1B5E20] px-6 py-3 rounded-xl flex items-center gap-2 font-semibold"
//             >
//               <FaPhoneAlt />
//               Call Now
//             </a>

//             <a
//               href="https://wa.me/919589807047"
//               target="_blank"
//               rel="noreferrer"
//               className="bg-green-500 px-6 py-3 rounded-xl flex items-center gap-2 font-semibold"
//             >
//               <FaWhatsapp />
//               WhatsApp
//             </a>

//           </div>

//         </div>
//       </section>

//     </div>
//   );
// };

// export default Products; 

import React from 'react'

const Products = () => {
  return (
    <div>Products</div>
  )
}

export default Products