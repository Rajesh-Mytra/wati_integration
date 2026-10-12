// Copyright (c) 2022, Bhavesh Maheshwari and contributors
// For license information, please see license.txt

frappe.ui.form.on("Wati Setting", {
	setup(frm) {
		frm.set_query("default_proforma_invoice_template", () => ({
			filters: {
				wati_setting: frm.doc.name || "",
			},
		}));
		frm.set_query("default_payment_link_template", () => ({
			filters: {
				wati_setting: frm.doc.name || "",
			},
		}));
	},
});
