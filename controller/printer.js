
const fs = require("fs");
const PDFDocument = require("pdfkit");
const Shipments = require('../model/shipments')


const getByIdAndPrint = async (req,res) =>{
    try {
      const invoice = await Shipments.findById(req.params.id)
      function createInvoice(invoice, path) {
        let doc = new PDFDocument({ margin: 50 });
      
        generateHeader(doc);
        generateCustomerInformation(doc, invoice);
        generateFooter(doc);
      
        doc.end();
        doc.pipe(fs.createWriteStream(path));
      }
    
      function generateHeader(doc) {
        doc
          .image("logo.png", 50, 45, { width: 50 })
          .fillColor("#444444")
          .fontSize(20)
          .text("ACME Inc.", 110, 57)
          .fontSize(10)
          .text("123 Main Street", 200, 65, { align: "right" })
          .text("New York, NY, 10025", 200, 80, { align: "right" })
          .moveDown();
      }
      
      function generateFooter(doc) {
        doc
          .fontSize(10)
          .text(
            "Payment is due within 15 days. Thank you for your business.",
            50,
            780,
            { align: "center", width: 500 }
          );
      }
    
      function generateCustomerInformation(doc, invoice) {
        const shipping = invoice.shipment[0];
        const payment_stauts = invoice.payment_stauts[0]
        const user = invoice.address[0]
      
    

        doc
        .text(`Shipment name:` + shipping.shipmentname, )
          .text(`Balance Due: ${payment_stauts.paid === false ? 'Not paid' : 'paid'}`,)
          .text(`Balance Due: ${payment_stauts.total}`, )
          .text(`Shipment price:` + shipping.price)
          .text(`Shipment number of requirement:` + shipping.quan)
          .text(`User name : ${user.userName}`,)
          .text(`User address : ${user.city}, ${user.country}`,)
          .text(`User email : ${user.email}`,)
          .moveDown();
      }
      function generateTableRow(doc, y, c1, c2, c3, c4, c5) {
        doc
          .fontSize(10)
          .text(c1, 50, y)
          .text(c2, 150, y)
          .text(c3, 280, y, { width: 90, align: "right" })
          .text(c4, 370, y, { width: 90, align: "right" })
          .text(c5, 0, y, { align: "right" });
      }
    
      createInvoice(invoice, 'shipment.pdf')

      res.json({
          message :invoice
      }) 
    } catch (error) {
      res.json({
        case : 0,
        message : error.message
      })
    }
  }


module.exports = {
 getByIdAndPrint, 
};
