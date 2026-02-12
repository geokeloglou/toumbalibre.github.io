(function () {
  const translations = {
    el: {
      site_title: "Toumba Libre | Cocktail Mix Wine + Cola 7.2% vol",
      meta_description:
        "Toumba Libre: Cocktail Mix Wine + Cola, 7.2% vol, 275ml. Ετοιμο προς καταναλωση. Παραγγελιες για επαγγελματιες.",
      meta_og_description: "Cocktail Mix Wine + Cola • 7.2% vol • 275ml",
      meta_twitter_description: "Cocktail Mix Wine + Cola • 7.2% vol • 275ml",
      modal_kicker: "18+ only",
      modal_title: "Είσαι άνω των 18;",
      modal_yes: "Ναι",
      modal_no: "Όχι",
      nav_product: "Προϊόν",
      nav_order: "Παραγγελία",
      nav_social: "Social",
      hero_kicker: "COCKTAIL MIX",
      hero_title: "WINE + COLA",
      hero_order: "Παρήγγειλε τώρα",
      hero_follow: "Ακολούθησε",
      about_kicker: "ΤΙ ΕΙΝΑΙ",
      about_title: "Λευκός οίνος + Cola",
      about_lead: "Έτοιμο προς κατανάλωση. Παγωμένο. Άνοιξε και φύγαμε.",
      order_kicker: "ΠΑΡΑΓΓΕΛΙΑ",
      contact_title: "Τηλέφωνο επικοινωνίας",
      call_cta: "Καλέστε 2316076956",
      order_note: "Ή εναλλακτικά",
      form_title: "Φόρμα Παραγγελίας",
      label_company: "Επωνυμία",
      label_email: "Email",
      label_afm: "ΑΦΜ",
      label_address: "Διεύθυνση",
      label_phone: "Τηλέφωνο",
      label_boxes: "Κιβώτια",
      label_notes: "Σημειώσεις",
      ph_company: "Π.χ. Εταιρεία Ε.Ε.",
      ph_email: "name@email.com",
      ph_afm: "123456789",
      ph_address: "Οδός, αριθμός, πόλη, Τ.Κ.",
      ph_phone: "69XXXXXXXX",
      ph_boxes: "Π.χ. 10",
      ph_notes: "Ώρες παράδοσης, περιοχή, σχόλια",
      submit_btn: "Αποστολή",
      tooltip_aria: "Πληροφορίες για τα κιβώτια",
      tooltip_text: "Κάθε κιβώτιο περιλαμβάνει 24 τεμάχια.",
      social_kicker: "SOCIAL",
      social_title: "Ακολούθησε μας",
      social_subtitle: "Νέα, συνεργασίες και περιεχόμενο.",
      footer_text:
        "TOUMBA LIBRE COMPANY Ε.Ε. • Έδρα: Αγίας Φωτεινής 5, Νέα Πολιτεία, Κορδελιού-Ευόσμου, Θεσσαλονίκης, Τ.Κ. 56224 • ΑΦΜ 803007611 • Γ.Ε.ΜΗ. 187274604000 • Απολαύστε υπεύθυνα 18+",
      email_subject_prefix: "Νέα παραγγελία από",
      email_company: "Επωνυμία",
      email_afm: "ΑΦΜ",
      email_email: "Email",
      email_phone: "Τηλέφωνο",
      email_address: "Διεύθυνση",
      email_boxes: "Κιβώτια",
      email_notes: "Σημειώσεις"
    },
    en: {
      site_title: "Toumba Libre | Cocktail Mix Wine + Cola 7.2% vol",
      meta_description:
        "Toumba Libre: Cocktail Mix Wine + Cola, 7.2% vol, 275ml. Ready to drink. Distributor orders available.",
      meta_og_description: "Cocktail Mix Wine + Cola • 7.2% vol • 275ml",
      meta_twitter_description: "Cocktail Mix Wine + Cola • 7.2% vol • 275ml",
      modal_kicker: "18+ only",
      modal_title: "Are you over 18?",
      modal_yes: "Yes",
      modal_no: "No",
      nav_product: "Product",
      nav_order: "Order",
      nav_social: "Social",
      hero_kicker: "COCKTAIL MIX",
      hero_title: "WINE + COLA",
      hero_order: "Order now",
      hero_follow: "Follow",
      about_kicker: "WHAT IT IS",
      about_title: "White wine + Cola",
      about_lead: "Ready to drink. Serve chilled. Open and enjoy.",
      order_kicker: "ORDER",
      contact_title: "Contact phone",
      call_cta: "Call 2316076956",
      order_note: "Or alternatively",
      form_title: "Order Form",
      label_company: "Company",
      label_email: "Email",
      label_afm: "VAT Number",
      label_address: "Address",
      label_phone: "Phone",
      label_boxes: "Boxes",
      label_notes: "Notes",
      ph_company: "e.g. Company LLC",
      ph_email: "name@email.com",
      ph_afm: "123456789",
      ph_address: "Street, number, city, ZIP",
      ph_phone: "69XXXXXXXX",
      ph_boxes: "e.g. 10",
      ph_notes: "Delivery hours, area, comments",
      submit_btn: "Submit",
      tooltip_aria: "Box quantity info",
      tooltip_text: "Each box includes 24 pieces.",
      social_kicker: "SOCIAL",
      social_title: "Follow us",
      social_subtitle: "News, collaborations and content.",
      footer_text:
        "TOUMBA LIBRE COMPANY E.E. • Registered office: Agias Fotinis 5, Nea Politeia, Kordelio-Evosmos, Thessaloniki, ZIP 56224 • VAT 803007611 • GEMI 187274604000 • Drink responsibly 18+",
      email_subject_prefix: "New order from",
      email_company: "Company",
      email_afm: "VAT Number",
      email_email: "Email",
      email_phone: "Phone",
      email_address: "Address",
      email_boxes: "Boxes",
      email_notes: "Notes"
    }
  };

  function deepFreeze(obj) {
    Object.getOwnPropertyNames(obj).forEach((prop) => {
      const value = obj[prop];
      if (value && typeof value === "object") {
        deepFreeze(value);
      }
    });
    return Object.freeze(obj);
  }

  window.TOUMBA_I18N = deepFreeze(translations);
})();
